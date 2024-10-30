'use client'
import React from 'react'
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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Bell } from 'lucide-react'


const AlertDialogExmple = () => {

  const handleBildirim=()=>{
    console.log('Bildirimler Acildi')
  }

  return (
    
    <AlertDialog >
    <AlertDialogTrigger>
      <Button > <Bell/> </Button> 
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Bildirimler</AlertDialogTitle>
        <AlertDialogDescription>
          Bildirimleri Acmak Istiyor musunuz
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleBildirim}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

  )
}

export default AlertDialogExmple