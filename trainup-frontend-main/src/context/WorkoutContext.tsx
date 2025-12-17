import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { Exercise, getUserExercises } from "../api/services";
import { useAuth } from "./AuthContext";

interface WorkoutContextData {
  exercises: Record<string, Exercise[]>;
  loading: boolean;
  refreshExercises: () => Promise<void>;
}

const WorkoutContext = createContext<WorkoutContextData>(
  {} as WorkoutContextData
);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [exercises, setExercises] = useState<Record<string, Exercise[]>>({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchExercises = async () => {
    if (user?._id) {
      try {
        setLoading(true);
        const data = await getUserExercises(user._id);
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchExercises();
  }, [user]);

  return (
    <WorkoutContext.Provider
      value={{ exercises, loading, refreshExercises: fetchExercises }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export function useWorkouts() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkouts must be used within a WorkoutProvider");
  }
  return context;
}
