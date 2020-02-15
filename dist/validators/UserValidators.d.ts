export declare class UserValidators {
    static signup(): import("express-validator").ValidationChain[];
    static verifyUser(): import("express-validator").ValidationChain[];
    static resendVerificationEmail(): import("express-validator").ValidationChain[];
    static login(): import("express-validator").ValidationChain[];
    static SendResetPasswordEmail(): import("express-validator").ValidationChain[];
    static VerifyResetPasswordToken(): import("express-validator").ValidationChain[];
    static resetPassword(): import("express-validator").ValidationChain[];
    static updateProfilePic(): import("express-validator").ValidationChain[];
}
