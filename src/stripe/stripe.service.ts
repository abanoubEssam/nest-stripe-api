import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
    private config: Stripe.StripeConfig = null;
    private stripe: Stripe = new Stripe(this.configService.get<string>("STRIPE_SK"), this.config)

    constructor(
        private configService: ConfigService
    ) { }

    async createCheckoutSession(
        line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
    ):Promise<Stripe.Checkout.Session>{
        return this.stripe.checkout.sessions.create({
            payment_method_types: ["card", "ideal"],
            line_items,
            success_url: "",
            cancel_url: ""
        })
    }

}
