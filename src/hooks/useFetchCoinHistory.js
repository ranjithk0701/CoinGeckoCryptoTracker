import { useState } from 'react';
import currencyStore from '../state/store';
import { useQuery } from '@tanstack/react-query';
import fetchCoinHistoricData from '../services/fetchCoinHistoricData';
function useFetchCoinHistory(coinId) {
    const { currency } = currencyStore();

    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily'); // Provide a default interval

    const { data: historicData, isLoading, isError } = useQuery({
        queryKey: ['coinHistoricData', coinId, currency, days, interval],  
        queryFn: () => fetchCoinHistoricData(coinId, interval, days, currency), // Removed the extra empty string
        cacheTime: 1000 * 60 * 2, // Cache data for 2 minutes
        staleTime: 1000 * 60 * 2, // Consider data fresh for 2 minutes
        enabled: !!coinId, // Prevents running query when coinId is undefined
    });

    return [
        historicData,
        isLoading,
        isError, 
        setDays,
        setCoinInterval,
        days,
        currency
    ]
}
export default useFetchCoinHistory;