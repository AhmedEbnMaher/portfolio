import Container from "@/components/Container";
import { Call } from "@/components/Icons/Call";
import { Gmail } from "@/components/Icons/Gmail";
import { Whats } from "@/components/Icons/Whats";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="bg-[#22252C] w-full p-10 pb-20 " id="contactme">
      <Container>
        <div className="flex justify-center">
          <h1 className="text-[#1DCBB2] font-bold text-2xl md:text-3xl my-20">
            CONTACT ME
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="flex justify-center items-center">
            <div>
              <Link href={"https://wa.me/201124424195"}>
                <div className="rounded-full p-2 border-2 border-[#1DCBB2]">
                  <Whats />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Link href={"tel:2010-175-08153"}>
                <div className="rounded-full p-2 border-2 border-[#1DCBB2]">
                  <Call />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Link
                href={
                  "https://mail.google.com/mail/?view=cm&fs=1&to=a.maher.mesalm@gmail.com&su=SUBJECT&body=BODY"
                }
              >
                <div className="rounded-full p-2 border-2 border-[#1DCBB2]">
                  <Gmail />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
