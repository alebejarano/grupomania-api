import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  //pass our localAuthguard class
  @UseGuards(LocalAuthGuard)
  @UseGuards(ThrottlerGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
    /*user: 
    "profilePic"
    "id"
    "name"
    "email"
    */
  }
}
