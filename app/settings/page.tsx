import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const accounts = [
  { id: "rbc", label: "RBC Direct Investing", status: "Not connected" },
  { id: "cibc", label: "CIBC Investor's Edge", status: "Not connected" },
  { id: "ibkr", label: "Interactive Brokers", status: "Not connected" }
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure DRIP behaviour and account mappings.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dividend Reinvestment (DRIP)</CardTitle>
          <CardDescription>
            Toggle DRIP to reinvest dividends by default for supported accounts.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between rounded-md border bg-muted/40 p-4">
          <div>
            <p className="font-medium">Enable DRIP</p>
            <p className="text-sm text-muted-foreground">
              Placeholder switch until the Supabase preference table is wired up.
            </p>
          </div>
          <Switch disabled aria-label="Enable DRIP toggle" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account mapping</CardTitle>
          <CardDescription>
            Map broker accounts to Supabase profiles to support consolidated reporting.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="flex items-center justify-between rounded-md border p-4 text-sm"
            >
              <div>
                <p className="font-medium">{account.label}</p>
                <p className="text-muted-foreground">{account.status}</p>
              </div>
              <span className="text-muted-foreground">Pending</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
