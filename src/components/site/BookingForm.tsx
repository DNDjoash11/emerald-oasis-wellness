import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Relaxation Massage",
  "Deep Tissue Massage",
  "Back, Neck & Shoulders",
  "Full Body Massage",
  "Sports & Recovery",
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground shadow-[var(--shadow-lift)]">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-primary-foreground/15">
          <Check className="size-7" />
        </div>
        <h3 className="mt-6 font-display text-3xl">Booking Request Received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/80">
          Thank you! CTHEMESSAGETHERAPIST will contact you to confirm your appointment.
        </p>
        <Button variant="onDark" size="pill" className="mt-7" onClick={() => setSubmitted(false)}>
          Make another booking
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl bg-primary p-6 shadow-[var(--shadow-lift)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name">
          <Input required name="name" placeholder="Enter your name" className="bg-background" />
        </Field>
        <Field label="Phone Number">
          <Input required name="phone" type="tel" placeholder="Enter your number" className="bg-background" />
        </Field>
        <Field label="Email">
          <Input required name="email" type="email" placeholder="Enter your email" className="bg-background" />
        </Field>
        <Field label="Choose Service">
          <select
            required
            name="service"
            defaultValue=""
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
          >
            <option value="" disabled>
              Select service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Date">
          <Input required name="date" type="date" className="bg-background" />
        </Field>
        <Field label="Preferred Time">
          <Input required name="time" type="time" className="bg-background" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message / Special Request">
            <Textarea
              name="message"
              rows={4}
              placeholder="Tell us anything we should know"
              className="bg-background"
            />
          </Field>
        </div>
      </div>
      <Button type="submit" variant="onDark" size="pill" className="mt-7 w-full">
        Confirm Booking
      </Button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs tracking-[0.12em] text-primary-foreground/80 uppercase">
        {label}
      </Label>
      {children}
    </div>
  );
}
