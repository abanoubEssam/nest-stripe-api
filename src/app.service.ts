import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StripeService } from './stripe/stripe.service';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    private stripeService: StripeService
  ) { }
  getHello(): string {
    const dbUser = this.configService.get<string>('DATABASE_USER');
    console.log("🚀 ~ file: app.service.ts ~ line 11 ~ AppService ~ getHello ~ dbUser", dbUser)
    return 'Hello World!';
  }


  async getCheckoutSessionId() {
    const orderArray = [
      {
        name: "coffee",
        amount: 51,
        currency: "eur",
        quantity: 1
      }
    ]
    const { id } = await this.stripeService.createCheckoutSession(orderArray)
    console.log("🚀 ~ file: app.service.ts ~ line 28 ~ AppService ~ getCheckoutSessionId ~ id", id)
    return { id }
  }
}
