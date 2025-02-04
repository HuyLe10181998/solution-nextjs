"use client";

import { Loader2Icon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface DeleteAlertDialogProps {
  isDeleting: boolean;
  onDelete: () => Promise<void>;
  title?: string;
  description?: string;
}

export function DeleteAlertDialog({
  isDeleting,
  onDelete,
  title = "Delete Post",
  description = "This action cannot be undone.",
}: DeleteAlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
       
        <button className="theme-btn !text-white !bg-red-500 !px-8 !py-2 !rounded-lg mt-4 line-height">
        {isDeleting ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            <span className="!text-white">Delete</span>
          )}
                    </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
