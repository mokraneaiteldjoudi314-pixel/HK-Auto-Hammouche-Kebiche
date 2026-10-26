-- Create the table if it does not exist.
create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  source text not null default 'hk-auto-demo'
);

-- Optional: enable row level security for the demo.
alter table public.contact_requests enable row level security;

create policy "Allow anonymous inserts"
on public.contact_requests
for insert
with check (true);

create policy "Allow authenticated reads"
on public.contact_requests
for select
using (auth.uid() is not null);
