import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database';

declare global {
  namespace Express {
    interface Request {
      supabase: SupabaseClient<Database>;
    }
  }
} 