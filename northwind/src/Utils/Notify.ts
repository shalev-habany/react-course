import { Notyf } from "notyf";

class Notify {
    private notyf = new Notyf({
        duration: 4000,
        position: {x: "center", y: "top"},
        dismissible: true,
    });

    success(msg: string): void {
        this.notyf.success(msg);
    }

    error(error: any): void {
        this.notyf.error(this.extractMessage(error));
    }

    private extractMessage(error: any): string {
        if (typeof error === "string") {
            return error;
        }
        if (typeof error?.response?.data === "string") {
                return error.response.data;
        }
        if (typeof error?.message === "string") {
            return error.message;
        }
        return "Some error occured, please try again"
    }
}

export const notify = new Notify();
