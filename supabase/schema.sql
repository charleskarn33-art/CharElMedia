-- =============================================================================
-- CharEl Media Group - Supabase Database Schema
-- =============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- =============================================================================
-- PROFILES TABLE (extends auth.users)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'admin', 'staff')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, phone)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'phone'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================================================
-- PHOTOGRAPHY BOOKINGS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.photography_bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  location TEXT NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'completed', 'cancelled', 'rescheduled')),
  total_amount DECIMAL(10,2),
  deposit_paid DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- PHOTO ALBUMS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.photo_albums (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  booking_id UUID REFERENCES public.photography_bookings(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  cover_photo_url TEXT,
  password_hash TEXT,
  is_public BOOLEAN DEFAULT FALSE,
  total_photos INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- PHOTO FILES
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.photo_files (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  album_id UUID REFERENCES public.photo_albums(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  watermark_url TEXT,
  file_size BIGINT,
  width INTEGER,
  height INTEGER,
  is_favorite BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- PODCAST EPISODES
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.podcast_episodes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL
    CHECK (category IN ('Business', 'Entrepreneurship', 'Technology', 'Entertainment', 'Faith', 'Education')),
  audio_url TEXT,
  video_url TEXT,
  thumbnail_url TEXT,
  duration INTEGER,
  guest_name TEXT,
  guest_bio TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  play_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- PODCAST GUEST REQUESTS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.podcast_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  topic TEXT NOT NULL,
  why_feature TEXT NOT NULL,
  social_links JSONB,
  profile_photo_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected', 'scheduled')),
  scheduled_date TIMESTAMPTZ,
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- RECORDING SESSIONS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.recording_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  artist_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  session_type TEXT NOT NULL
    CHECK (session_type IN ('music_recording', 'voice_over', 'podcast_recording', 'audio_editing', 'mixing', 'mastering')),
  session_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'completed', 'cancelled')),
  total_hours DECIMAL(4,2),
  rate_per_hour DECIMAL(10,2),
  total_amount DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- AUDIO FILES
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.audio_files (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  session_id UUID REFERENCES public.recording_sessions(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size BIGINT,
  duration INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- PRINT ORDERS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.print_orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  order_number TEXT UNIQUE NOT NULL DEFAULT 'ORD-' || UPPER(SUBSTRING(uuid_generate_v4()::text, 1, 8)),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  product_type TEXT NOT NULL
    CHECK (product_type IN ('t_shirts', 'banners', 'posters', 'flyers', 'business_cards', 'stickers', 'roll_up_banners', 'brochures', 'branded_mugs')),
  quantity INTEGER NOT NULL,
  dimensions TEXT,
  description TEXT,
  delivery_date DATE,
  artwork_url TEXT,
  status TEXT NOT NULL DEFAULT 'submitted'
    CHECK (status IN ('submitted', 'design_review', 'printing', 'quality_check', 'ready_pickup', 'completed', 'cancelled')),
  total_amount DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- PAYMENTS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reference_type TEXT NOT NULL
    CHECK (reference_type IN ('photography', 'recording', 'printing', 'podcast')),
  reference_id UUID NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  payment_method TEXT NOT NULL
    CHECK (payment_method IN ('orange_money', 'mtn_mobile', 'visa', 'mastercard', 'cash')),
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  transaction_id TEXT,
  receipt_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- INVOICES
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.invoices (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  invoice_number TEXT UNIQUE NOT NULL DEFAULT 'INV-' || UPPER(SUBSTRING(uuid_generate_v4()::text, 1, 8)),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reference_type TEXT NOT NULL,
  reference_id UUID NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  tax DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'unpaid' CHECK (status IN ('unpaid', 'partial', 'paid')),
  due_date DATE,
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- NOTIFICATIONS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL
    CHECK (type IN ('booking', 'order', 'photo', 'payment', 'general')),
  read BOOLEAN DEFAULT FALSE,
  link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- REVIEWS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  service_type TEXT NOT NULL
    CHECK (service_type IN ('photography', 'podcast', 'recording', 'printing')),
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- SETTINGS
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO public.settings (key, value) VALUES
  ('business_hours', '{"mon_fri": "9am-6pm", "saturday": "10am-4pm", "sunday": "closed"}'::jsonb),
  ('photography_rates', '{"basic": 80, "standard": 150, "premium": 300}'::jsonb),
  ('studio_rates', '{"per_hour": 25, "basic_2hr": 50, "standard_4hr": 90, "full_day": 160}'::jsonb)
ON CONFLICT (key) DO NOTHING;

-- =============================================================================
-- UPDATED_AT TRIGGER
-- =============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_photography_bookings_updated_at BEFORE UPDATE ON photography_bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_photo_albums_updated_at BEFORE UPDATE ON photo_albums FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_podcast_episodes_updated_at BEFORE UPDATE ON podcast_episodes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_podcast_requests_updated_at BEFORE UPDATE ON podcast_requests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_recording_sessions_updated_at BEFORE UPDATE ON recording_sessions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_print_orders_updated_at BEFORE UPDATE ON print_orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================================================
-- ROW LEVEL SECURITY
-- =============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

ALTER TABLE public.photography_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own bookings" ON public.photography_bookings FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Anyone can insert bookings" ON public.photography_bookings FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Admins can manage all bookings" ON public.photography_bookings FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.photo_albums ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view albums for their bookings" ON public.photo_albums FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.photography_bookings WHERE id = booking_id AND user_id = auth.uid())
  OR is_public = TRUE
);
CREATE POLICY "Admins can manage all albums" ON public.photo_albums FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.photo_files ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view files in their albums" ON public.photo_files FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.photo_albums pa
    JOIN public.photography_bookings pb ON pa.id = pa.id
    WHERE pa.id = album_id AND (pb.user_id = auth.uid() OR pa.is_public = TRUE)
  )
);
CREATE POLICY "Admins can manage all files" ON public.photo_files FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.podcast_episodes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published episodes" ON public.podcast_episodes FOR SELECT USING (published = TRUE);
CREATE POLICY "Admins can manage episodes" ON public.podcast_episodes FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.podcast_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own requests" ON public.podcast_requests FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Anyone can submit requests" ON public.podcast_requests FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Admins can manage requests" ON public.podcast_requests FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.recording_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own sessions" ON public.recording_sessions FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Anyone can book sessions" ON public.recording_sessions FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Admins can manage sessions" ON public.recording_sessions FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.audio_files ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own audio files" ON public.audio_files FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.recording_sessions WHERE id = session_id AND user_id = auth.uid())
);
CREATE POLICY "Admins can manage audio files" ON public.audio_files FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.print_orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own orders" ON public.print_orders FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Anyone can place orders" ON public.print_orders FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Admins can manage orders" ON public.print_orders FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own payments" ON public.payments FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Admins can manage payments" ON public.payments FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own notifications" ON public.notifications FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can mark own notifications read" ON public.notifications FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "Admins can create notifications" ON public.notifications FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff'))
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view reviews" ON public.reviews FOR SELECT USING (TRUE);
CREATE POLICY "Users can create reviews" ON public.reviews FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Admins can manage reviews" ON public.reviews FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- =============================================================================
-- SEED DATA
-- =============================================================================

INSERT INTO public.podcast_episodes (title, description, category, guest_name, guest_bio, duration, published, published_at)
VALUES
  ('Building a Successful Business in Liberia', 'Emmanuel shares his journey from small vendor to enterprise owner.', 'Business', 'Emmanuel Kollie', 'Serial entrepreneur and business coach based in Monrovia.', 2700, TRUE, NOW() - INTERVAL '7 days'),
  ('Tech Innovation and the African Youth', 'Exploring the tech ecosystem across Africa and what it means for Liberian youth.', 'Technology', 'Patricia Doe', 'Tech leader and founder of TechLib Innovation Hub.', 2280, TRUE, NOW() - INTERVAL '14 days'),
  ('Faith, Resilience and Entrepreneurship', 'How faith and business go hand in hand.', 'Faith', 'Bishop James Flomo', 'Senior Pastor and philanthropist in Monrovia.', 3120, TRUE, NOW() - INTERVAL '21 days')
ON CONFLICT DO NOTHING;

-- UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@charelmedia.com';
