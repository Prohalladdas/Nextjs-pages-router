import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({
      success: false,
      message: "Please make a POST request",
    });

  const contactData = {
    fullName: "Prohallad",
    email: "test@gmail.com",
    subject: "fan letter",
    message: "Heyy!",
  };

  const { error } = await supabase.from("contact").insert([contactData]);

  //Error msg
  if (error)
    res.status(400).json({
      success: false,
      message: "Could not send your message. Please try again",
    });

  //Success msg
  res.status(200).json({
    success: true,
    message: "Thanks for your message! We will be in touch soon :)",
  });
}
