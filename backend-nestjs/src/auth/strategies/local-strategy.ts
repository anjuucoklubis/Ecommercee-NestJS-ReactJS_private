// // import { Injectable, UnauthorizedException } from '@nestjs/common';
// // import { PassportStrategy } from '@nestjs/passport';
// // import { Strategy } from 'passport-local';
// // import { AuthService } from '../auth/auth.service';

// // @Injectable()
// // export class LocalStrategy extends PassportStrategy(Strategy) {
// //   constructor(private authService: AuthService) {
// //     super();
// //   }

// //   async validate(username: string, password: string) {
// //     const user = await this.authService.validateUser(username, password);
// //     if (!user) {
// //       throw new UnauthorizedException();
// //     }
// //     return user;
// //   }
// // }

// import { Strategy } from 'passport-local';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from '../auth/auth.service';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super({ usernameField: 'email' });
//   }

//   async validate(email: string, password: string): Promise<any> {
//     console.log(`Authenticating user: ${email}`);
//     const user = await this.authService.validateUser(email, password);
//     if (!user) {
//       console.log('Invalid credentials');
//       throw new UnauthorizedException('Invalid credentials');
//     }
//     console.log('User authenticated successfully');
//     return user;
//   }
  
// }

