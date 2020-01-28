
import { ResetPasswordService } from "./ResetPasswordService";
import { RequestService } from "./RequestService";
import { config } from "../config";
import { InvalidEmailError } from "../error";


describe('ResetPasswordService', () => {
    const mockRequestService = new RequestService();
    mockRequestService.post = jest.fn().mockImplementation((url: string, body: any) => {
        Promise.resolve({})
    });
    const resetPasswordService = new ResetPasswordService(mockRequestService);

    describe('validateEmail', () => {
        it("amin@gmail.com should be a valide ", () => {
            expect(resetPasswordService.validateEmail("amin@gmail.com")).toBeTruthy()
        })

        it("empty email should be invalid ", () => {
            expect(resetPasswordService.validateEmail("")).toBeFalsy();
        })

        it("`dfssfs` should be invalid ", () => {
            expect(resetPasswordService.validateEmail("dfssfs")).toBeFalsy();
        })

        it("`dfssfs@asasda` should be valid ", () => {
            expect(resetPasswordService.validateEmail("dfssfs@asasda")).toBeTruthy();
        })
    });

    describe('post', () => {
        it("send amin@gmail.com should call RequestService", () => {
            resetPasswordService.post("admin@gmail.com");
            expect(mockRequestService.post).toHaveBeenCalledTimes(1);
            expect((mockRequestService.post as any).mock.calls[0][0]).toBe(config.resetPasswordApi);
        })

        it("should fail if email is invalid", async () => {
            try{
                await resetPasswordService.post("admin");
                fail();
            }
            catch(e){
                if(!(e.message == "invalide email admin"))
                    fail();
            }
        })
    });
});