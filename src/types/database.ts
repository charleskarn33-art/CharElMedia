export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          avatar_url: string | null
          role: "customer" | "admin" | "staff"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: "customer" | "admin" | "staff"
          created_at?: string
          updated_at?: string
        }
        Update: {
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: "customer" | "admin" | "staff"
          updated_at?: string
        }
      }
      photography_bookings: {
        Row: {
          id: string
          user_id: string | null
          customer_name: string
          customer_email: string
          customer_phone: string
          event_type: string
          event_date: string
          event_time: string
          location: string
          notes: string | null
          status: "pending" | "approved" | "completed" | "cancelled" | "rescheduled"
          total_amount: number | null
          deposit_paid: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          customer_name: string
          customer_email: string
          customer_phone: string
          event_type: string
          event_date: string
          event_time: string
          location: string
          notes?: string | null
          status?: "pending" | "approved" | "completed" | "cancelled" | "rescheduled"
          total_amount?: number | null
          deposit_paid?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          status?: "pending" | "approved" | "completed" | "cancelled" | "rescheduled"
          event_date?: string
          event_time?: string
          notes?: string | null
          total_amount?: number | null
          deposit_paid?: number | null
          updated_at?: string
        }
      }
      photo_albums: {
        Row: {
          id: string
          booking_id: string
          title: string
          description: string | null
          cover_photo_url: string | null
          password_hash: string | null
          is_public: boolean
          total_photos: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          booking_id: string
          title: string
          description?: string | null
          cover_photo_url?: string | null
          password_hash?: string | null
          is_public?: boolean
          total_photos?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          description?: string | null
          cover_photo_url?: string | null
          password_hash?: string | null
          is_public?: boolean
          total_photos?: number
          updated_at?: string
        }
      }
      photo_files: {
        Row: {
          id: string
          album_id: string
          file_name: string
          file_url: string
          watermark_url: string | null
          file_size: number | null
          width: number | null
          height: number | null
          is_favorite: boolean
          created_at: string
        }
        Insert: {
          id?: string
          album_id: string
          file_name: string
          file_url: string
          watermark_url?: string | null
          file_size?: number | null
          width?: number | null
          height?: number | null
          is_favorite?: boolean
          created_at?: string
        }
        Update: {
          is_favorite?: boolean
        }
      }
      podcast_episodes: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          audio_url: string | null
          video_url: string | null
          thumbnail_url: string | null
          duration: number | null
          guest_name: string | null
          guest_bio: string | null
          published: boolean
          published_at: string | null
          play_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: string
          audio_url?: string | null
          video_url?: string | null
          thumbnail_url?: string | null
          duration?: number | null
          guest_name?: string | null
          guest_bio?: string | null
          published?: boolean
          published_at?: string | null
          play_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          description?: string
          category?: string
          audio_url?: string | null
          video_url?: string | null
          thumbnail_url?: string | null
          duration?: number | null
          guest_name?: string | null
          guest_bio?: string | null
          published?: boolean
          published_at?: string | null
          play_count?: number
          updated_at?: string
        }
      }
      podcast_requests: {
        Row: {
          id: string
          user_id: string | null
          full_name: string
          email: string
          phone: string
          topic: string
          why_feature: string
          social_links: Json | null
          profile_photo_url: string | null
          status: "pending" | "approved" | "rejected" | "scheduled"
          scheduled_date: string | null
          admin_notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          full_name: string
          email: string
          phone: string
          topic: string
          why_feature: string
          social_links?: Json | null
          profile_photo_url?: string | null
          status?: "pending" | "approved" | "rejected" | "scheduled"
          scheduled_date?: string | null
          admin_notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          status?: "pending" | "approved" | "rejected" | "scheduled"
          scheduled_date?: string | null
          admin_notes?: string | null
          updated_at?: string
        }
      }
      recording_sessions: {
        Row: {
          id: string
          user_id: string | null
          artist_name: string
          email: string
          phone: string
          session_type: string
          session_date: string
          start_time: string
          end_time: string
          notes: string | null
          status: "pending" | "approved" | "completed" | "cancelled"
          total_hours: number | null
          rate_per_hour: number | null
          total_amount: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          artist_name: string
          email: string
          phone: string
          session_type: string
          session_date: string
          start_time: string
          end_time: string
          notes?: string | null
          status?: "pending" | "approved" | "completed" | "cancelled"
          total_hours?: number | null
          rate_per_hour?: number | null
          total_amount?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          status?: "pending" | "approved" | "completed" | "cancelled"
          notes?: string | null
          total_amount?: number | null
          updated_at?: string
        }
      }
      audio_files: {
        Row: {
          id: string
          session_id: string
          file_name: string
          file_url: string
          file_size: number | null
          duration: number | null
          created_at: string
        }
        Insert: {
          id?: string
          session_id: string
          file_name: string
          file_url: string
          file_size?: number | null
          duration?: number | null
          created_at?: string
        }
        Update: Record<string, never>
      }
      print_orders: {
        Row: {
          id: string
          user_id: string | null
          customer_name: string
          customer_email: string
          customer_phone: string
          product_type: string
          quantity: number
          dimensions: string | null
          description: string | null
          delivery_date: string | null
          artwork_url: string | null
          status: "submitted" | "design_review" | "printing" | "quality_check" | "ready_pickup" | "completed" | "cancelled"
          total_amount: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          customer_name: string
          customer_email: string
          customer_phone: string
          product_type: string
          quantity: number
          dimensions?: string | null
          description?: string | null
          delivery_date?: string | null
          artwork_url?: string | null
          status?: "submitted" | "design_review" | "printing" | "quality_check" | "ready_pickup" | "completed" | "cancelled"
          total_amount?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          status?: "submitted" | "design_review" | "printing" | "quality_check" | "ready_pickup" | "completed" | "cancelled"
          artwork_url?: string | null
          total_amount?: number | null
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string | null
          reference_type: "photography" | "recording" | "printing" | "podcast"
          reference_id: string
          amount: number
          currency: string
          payment_method: "orange_money" | "mtn_mobile" | "visa" | "mastercard" | "cash"
          status: "pending" | "completed" | "failed" | "refunded"
          transaction_id: string | null
          receipt_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          reference_type: "photography" | "recording" | "printing" | "podcast"
          reference_id: string
          amount: number
          currency?: string
          payment_method: "orange_money" | "mtn_mobile" | "visa" | "mastercard" | "cash"
          status?: "pending" | "completed" | "failed" | "refunded"
          transaction_id?: string | null
          receipt_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          status?: "pending" | "completed" | "failed" | "refunded"
          transaction_id?: string | null
          receipt_url?: string | null
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: "booking" | "order" | "photo" | "payment" | "general"
          read: boolean
          link: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          message: string
          type: "booking" | "order" | "photo" | "payment" | "general"
          read?: boolean
          link?: string | null
          created_at?: string
        }
        Update: {
          read?: boolean
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
