export declare class UserController {
    static signup(req: any, res: any, next: any): Promise<void>;
    static verify(req: any, res: any, next: any): Promise<void>;
    static resendVerificationEmail(req: any, res: any, next: any): Promise<void>;
    static login(req: any, res: any, next: any): Promise<void>;
    static sendResetPasswordEmail(req: any, res: any, next: any): Promise<void>;
    static VerifyResetPasswordToken(req: any, res: any, next: any): void;
    static resetPassword(req: any, res: any, next: any): Promise<void>;
    static updateProfilePic(req: any, res: any, next: any): Promise<void>;
    static test(req: any, res: any, next: any): Promise<void>;
    static webscraptest(req: any, res: any, next: any): Promise<void>;
    static sendWhatapp(req: any, res: any, next: any): Promise<void>;
    static home(req: any, res: any, next: any): Promise<void>;
}
