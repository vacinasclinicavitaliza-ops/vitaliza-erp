// Tipos para o sistema
export interface Product {
  id: string;
  sku: string;
  name: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  supplier: string;
  price: number;
  cost: number;
  stock: number;
  status: 'active' | 'inactive' | 'draft' | 'production';
  created_at: string;
  updated_at: string;
}

export interface Marketplace {
  id: string;
  name: string;
  type: 'mercado_livre' | 'shopee' | 'amazon';
  active: boolean;
  created_at: string;
}

export interface DashboardStats {
  totalProducts: number;
  activeProducts: number;
  inProduction: number;
  noStock: number;
  totalRevenue: number;
  totalCosts: number;
  profit: number;
}
