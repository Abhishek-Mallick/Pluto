import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SignIn } from '@clerk/nextjs';
import { useSignIn } from "@clerk/clerk-react";

type ModalProps = {
    triggerButtonText: string;
};

const Modal: React.FC<ModalProps> = ({ triggerButtonText }) => {
    const { isLoaded, signIn } = useSignIn();
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">{triggerButtonText}</Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent>
                    <SignIn />
                    <DialogClose asChild>
                        <Button variant="ghost" className="mt-4">Close</Button>
                    </DialogClose>
                </DialogContent>
            </DialogPortal>
            
        </Dialog>
    );
};

export default Modal;
