import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Eye, EyeOff, Lock } from "lucide-react";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-jet via-jet-light to-jet" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="glass rounded-lg p-8 md:p-10">
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-2xl font-bold tracking-wider">STAFF LOGIN</h1>
            <p className="font-sub text-xs tracking-[0.3em] text-muted-foreground mt-1 uppercase">Authorized Personnel Only</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-sub text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Employee ID</label>
              <input
                type="text"
                className="w-full bg-input border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="BB-XXXXX"
              />
            </div>
            <div>
              <label className="font-sub text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  className="w-full bg-input border border-border rounded px-4 py-3 pr-12 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full font-sub text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" /> Access Dashboard
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Unauthorized access is strictly prohibited and monitored.
            </p>
          </div>
        </div>

        <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/10 -z-10" />
      </motion.div>
    </div>
  );
};

export default Login;
