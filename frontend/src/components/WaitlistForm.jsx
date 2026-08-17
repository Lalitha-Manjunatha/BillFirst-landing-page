import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const WaitlistForm = ({ idPrefix = "waitlist", compact = false }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/waitlist`, { email });
      setJoined(true);
      setEmail("");
      if (data.status === "already_joined") {
        toast("You're already on the list, eager one. Sona noticed.");
      } else {
        toast.success("You're in. Sona's warming up her glow for you.");
      }
    } catch (err) {
      toast.error("That didn't go through — let's try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      data-testid={`${idPrefix}-form`}
      className={`flex w-full ${compact ? "max-w-md" : "max-w-lg"} items-center gap-2 rounded-full glass p-1.5`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        data-testid={`${idPrefix}-email-input`}
        className="w-full bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-ash focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        data-testid={`${idPrefix}-submit-button`}
        className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-sona-yellow to-sona-orange px-5 py-2.5 text-sm font-bold text-void transition-transform duration-300 hover:scale-[1.04] disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {joined ? "Invite more" : "Join waitlist"}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
};

export default WaitlistForm;
