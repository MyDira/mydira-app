import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    'https://utgtbofebaompxhpcpvg.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0Z3Rib2ZlYmFvbXB4aHBjcHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyOTQ4MDMsImV4cCI6MjA2ODg3MDgwM30.J_GzH_c6mrT-DPpkS2t-2EyKehubjwr5OG2Elxp36u8'
  );
}
