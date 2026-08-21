export type PlanId = "starter" | "pro" | "enterprise";

export interface Plan {
  id: PlanId;
  name: string;
  price: number | null;
  priceLabel: string;
}

export const PLANS: Record<PlanId, Plan> = {
  starter: { id: "starter", name: "Starter", price: 2500, priceLabel: "$2,500" },
  pro: { id: "pro", name: "Professional", price: 8000, priceLabel: "$8,000" },
  enterprise: { id: "enterprise", name: "Enterprise", price: null, priceLabel: "Custom" },
};

export function getPlan(planParam: string | null): Plan {
  if (planParam && planParam in PLANS) {
    return PLANS[planParam as PlanId];
  }
  return PLANS.starter;
}
