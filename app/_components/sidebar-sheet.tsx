import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOption } from "../_constants.tsx/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="data:image/jpeg;base64,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" />
        </Avatar>
        <div>
          <p className="font-bold">Lucas Oliveira</p>
          <p className="text-xs">lucas.oliveiramacedo@hotmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOption.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
