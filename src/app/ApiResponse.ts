import { Product } from './Product';

export interface ApiResponse {
    data: {
        result: Product[];
      };
}