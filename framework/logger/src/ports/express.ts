import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

export type Response = ExpressResponse;

export interface Request extends ExpressRequest {
  correlationId?: string | string[];
  parentSpan?: string | string[];
  span?: string | string[];
}
