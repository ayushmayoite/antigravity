CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL
);

ALTER TABLE products 
  ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::jsonb, 
  ADD COLUMN IF NOT EXISTS category_id UUID REFERENCES categories(id);
