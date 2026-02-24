import { useQuery } from '@tanstack/react-query';

// Generate a simple anonymous user ID for tracking if not authenticated
const getOrCreateUserId = () => {
    if (typeof window === 'undefined') return 'anonymous';
    let userId = localStorage.getItem('oando_user_id');
    if (!userId) {
        userId = 'user_' + Math.random().toString(36).substring(2, 9);
        localStorage.setItem('oando_user_id', userId);
    }
    return userId;
};

export function useRecommendations() {
    return useQuery({
        queryKey: ['recommendations'],
        queryFn: async () => {
            const userId = getOrCreateUserId();
            const res = await fetch('/api/ai-advisor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: "I need workspace recommendations based on my history or general best sellers.",
                    userId
                })
            });
            if (!res.ok) throw new Error('Failed to fetch recommendations');
            return res.json();
        },
        staleTime: 1000 * 60 * 60, // 1 hour
    });
}
