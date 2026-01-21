import { useState, useEffect } from "react";
import axios from "axios";

export interface SystemStatus {
    temperature: number | null;
    cpuUsage: number;
    memUsage: number;
    timestamp: string;
}

export function useSystemStatus() {
    const [system, setSystem] = useState<SystemStatus | null>(null);
    const [loading, setLoading] = useState(true);

    const API = import.meta.env.DEV
        ? "http://maackia.asuscomm.com/api"
        : "/api";

    const fetchSystem = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${API}/system`);
            setSystem(data);
        } catch {
            setSystem(null); // 네트워크 에러 무시
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSystem(); // 초기 로드
        const interval = setInterval(fetchSystem, 5000); // 5초마다
        return () => clearInterval(interval);
    }, []);

    return { system, loading, refetch: fetchSystem };
}
