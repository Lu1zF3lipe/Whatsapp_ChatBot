import TwilioClient, { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

class SendMessageService {
  private client: Twilio;
  public constructor() {
    this.client = TwilioClient(accountSid, authToken);
  }

  public async sendMenssage(message: string, to: string){
    const response = await this.client.messages.create({
      body: message,
      from: "whatsapp:+14155238886",
      to,
    });
  }
}

export const sendMessageService = new SendMessageService();
