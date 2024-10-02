import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Faça login na plataforma</DialogTitle>
          <DialogDescription>
            Conecte-se usando sua conta Google
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="outline"
          className="gap-1 font-bold"
          onClick={handleLoginWithGoogleClick}
        >
          <Image alt=" " src="/google.svg" width={18} height={18} />
          Google
        </Button>
      </DialogContent>
    </>
  )
}

export default SignInDialog
