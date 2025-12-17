import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { Payment, getUserPayments } from "../api/services";
import { useAuth } from "./AuthContext";

interface PaymentContextData {
  payments: Payment[];
  loading: boolean;
  refreshPayments: () => Promise<void>;
}

const PaymentContext = createContext<PaymentContextData>(
  {} as PaymentContextData
);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchPayments = async () => {
    if (user?._id) {
      try {
        setLoading(true);
        const data = await getUserPayments(user._id);
        setPayments(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [user]);

  return (
    <PaymentContext.Provider
      value={{ payments, loading, refreshPayments: fetchPayments }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export function usePayments() {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayments must be used within a PaymentProvider");
  }
  return context;
}
