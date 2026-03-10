import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

interface CompanyProfileDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CompanyProfileDownloadDialog({
  open,
  onOpenChange,
}: CompanyProfileDownloadDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download Company Profile</DialogTitle>
          <DialogDescription>
            Your company profile download should begin automatically. If it
            doesn't start, please try again.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
