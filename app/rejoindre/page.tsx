"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Tag, 
  Briefcase,
  GraduationCap,
  Rocket,
  Loader2,
  FileText,
  CheckCircle2
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Hero1 from "@/components/rejoindre/Hero1";

// 1. Schéma adapté au recrutement
const formSchema = z.object({
  civilite: z.enum(["Monsieur", "Madame"]),
  lastName: z.string().min(1, { message: "Le champ nom est obligatoire" }),
  firstName: z.string().min(1, { message: "Le champ prénom est obligatoire" }),
  telephone: z.string().min(10, { message: "Numéro invalide" }),
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  profil: z.string().min(1, { message: "Veuillez sélectionner votre profil" }),
  experience: z.string().min(1, { message: "Veuillez préciser votre expérience" }),
  message: z.string().min(10, { message: "Dites-nous en un peu plus sur vos motivations" }),
});

export default function RejoindrePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      civilite: "Monsieur",
      lastName: "",
      firstName: "",
      telephone: "",
      email: "",
      profil: "",
      experience: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Note: Adaptez l'endpoint API si nécessaire (ex: /api/recrutement)
      const response = await fetch('/api/rejoindre', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        alert("Une erreur est survenue lors de l'envoi de votre candidature.");
      }
    } catch (error) {
      alert("Impossible de contacter le serveur.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const iconInputStyle = "pl-10 h-12 bg-slate-50/50 border-slate-200 rounded-none focus:ring-teal-600";

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
        <div className="bg-white p-12 max-w-xl text-center shadow-xl border-t-4 border-teal-600">
          <CheckCircle2 className="size-16 text-teal-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Candidature reçue !</h1>
          <p className="text-slate-600 mb-8">
            Merci pour votre intérêt. L'équipe de Merci Immobilier va étudier votre profil avec attention et reviendra vers vous très prochainement.
          </p>
          <Button onClick={() => setIsSuccess(false)} className="bg-slate-800 rounded-none uppercase tracking-widest">
            Retour
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-200 pb-8">
        <Hero1 />
      <div className="max-w-6xl mx-auto">
        
       

        <div className="bg-white p-8 md:p-16 shadow-sm border border-slate-100 mt-16">
          
         

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* --- COLONNE GAUCHE : IDENTITÉ & PROFIL --- */}
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <User className="size-5 text-teal-600" /> Votre Profil
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="civilite"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-8">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Monsieur" id="m" />
                              <label htmlFor="m" className="text-sm font-medium cursor-pointer">Monsieur</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Madame" id="f" />
                              <label htmlFor="f" className="text-sm font-medium cursor-pointer">Madame</label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <Tag className="absolute left-3 top-3.5 size-5 text-slate-400" />
                            <FormControl><Input placeholder="Nom *" {...field} className={iconInputStyle} /></FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <Tag className="absolute left-3 top-3.5 size-5 text-slate-400" />
                            <FormControl><Input placeholder="Prénom *" {...field} className={iconInputStyle} /></FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="telephone"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3.5 size-5 text-slate-400" />
                            <FormControl><Input placeholder="Téléphone *" {...field} className={iconInputStyle} /></FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3.5 size-5 text-slate-400" />
                            <FormControl><Input placeholder="Adresse e-mail *" {...field} className={iconInputStyle} /></FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="profil"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quel est votre profil ? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none bg-slate-50/50">
                              <SelectValue placeholder="Choisir une option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="etudiant">Étudiant</SelectItem>
                            <SelectItem value="pro">Professionnel de l'immobilier</SelectItem>
                            <SelectItem value="reconversion">En reconversion</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expérience en vente / immobilier ? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none bg-slate-50/50">
                              <SelectValue placeholder="Niveau d'expérience" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0">Débutant</SelectItem>
                            <SelectItem value="1-3">1 à 3 ans</SelectItem>
                            <SelectItem value="3-5">3 à 5 ans</SelectItem>
                            <SelectItem value="5+">Plus de 5 ans</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* --- COLONNE DROITE : MOTIVATIONS --- */}
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <FileText className="size-5 text-teal-600" /> Vos Motivations
                  </h2>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-4 size-5 text-slate-400" />
                          <FormControl>
                            <Textarea 
                              placeholder="Parlez-nous de vous et de pourquoi vous souhaitez rejoindre Merci Immobilier... *" 
                              className="min-h-[300px] pl-10 pt-4 rounded-none bg-slate-50/50 border-slate-200" 
                              {...field} 
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p className="text-xs text-slate-400 italic">
                    * Champs obligatoires. En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour l'étude de votre candidature.
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-slate-800 hover:bg-teal-700 text-white px-12 h-14 rounded-none transition-all uppercase font-bold tracking-widest flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 className="animate-spin size-4" /> Analyse...</>
                  ) : (
                    "Postuler"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}