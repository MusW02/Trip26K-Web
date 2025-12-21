import { useState } from "react";
import { travelers } from "@/data/travelers";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

// 👇 PASTE YOUR KEYS HERE (Keep the quote marks!)
const SERVICE_ID = "service_c6pcn5p";   // e.g. "service_z49l2"
const TEMPLATE_ID = "template_42ay7mq"; // e.g. "template_8a72b"
const PUBLIC_KEY = "wh6w1b5Du4kZh91ql";   // e.g. 

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  // Simple Password Check
  const handleLogin = () => {
    if (password === "1234") { // 👈 You can change this password
      setIsAuthenticated(true);
      toast.success("Welcome, Admin!");
    } else {
      toast.error("Wrong Password");
    }
  };

  const handleBroadcast = async () => {
    if (!confirm("Are you sure you want to email EVERYONE?")) return;
    
    setLoading(true);
    setLogs([]);

    // Calculate Days Left
    const tripDate = new Date("2025-01-09"); // 👈 Check this date!
    const today = new Date();
    const diffTime = Math.ceil((tripDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    let successCount = 0;

    for (const person of travelers) {
      if (!person.email) {
        setLogs(prev => [...prev, `⚠️ Skipped ${person.name} (No Email)`]);
        continue;
      }

      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            to_name: person.name,
            to_email: person.email, // This matches the {{to_email}} we set in the dashboard
            days_left: diffTime,
          },
          PUBLIC_KEY
        );
        successCount++;
        setLogs(prev => [...prev, `✅ Sent to ${person.name}`]);
      } catch (error) {
        console.error(error);
        setLogs(prev => [...prev, `❌ Failed: ${person.name}`]);
      }
    }

    setLoading(false);
    if (successCount > 0) toast.success(`Sent ${successCount} emails!`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Trip Admin Access 🔒</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input 
              type="password" 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            <Button className="w-full" onClick={handleLogin}>Unlock</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto pt-32 px-4 max-w-2xl">
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">📢 Trip Broadcast Center</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 text-blue-800 text-sm">
              Ready to notify <strong>{travelers.length} travelers</strong>.
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-16 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={handleBroadcast}
              disabled={loading}
            >
              {loading ? "Sending Emails..." : "🚀 BLAST EMAIL REMINDERS"}
            </Button>

            <div className="mt-8 bg-black/90 text-green-400 p-4 rounded-md h-64 overflow-y-auto font-mono text-xs">
              <div className="border-b border-gray-700 pb-2 mb-2 text-gray-400">System Logs:</div>
              {logs.length === 0 && <span className="opacity-50">Waiting for command...</span>}
              {logs.map((log, i) => (
                <div key={i} className="py-1">{log}</div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;