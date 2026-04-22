import { GetServerSideProps } from 'next';
import { getDashboardData } from '../lib/api';

export default function Dashboard({ user, notifications, analytics, currentTime }: any) {
  return (
    <div className="p-8 bg-slate-100 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-slate-200">
        <header className="flex justify-between items-center mb-12 border-b pb-6">
          <h1 className="text-3xl font-black text-slate-800 tracking-tighter">ADMIN PANEL</h1>
          <div className="text-right">
            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Real-time Data</p>
            <p className="text-sm font-mono text-slate-600 font-bold">{currentTime}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <p className="text-indigo-200 text-xs font-bold uppercase mb-1">Page Views</p>
            <p className="text-4xl font-black">{analytics.pageViews.toLocaleString()}</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">Active Sessions</p>
            <p className="text-4xl font-black text-slate-800">{analytics.sessions}</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">Bounce Rate</p>
            <p className="text-4xl font-black text-slate-800">{analytics.bounceRate.toFixed(1)}%</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Recent Alerts</h2>
          {notifications.map((n: any) => (
            <div key={n.id} className={`p-5 rounded-2xl border transition-all ${n.read ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-indigo-100 shadow-sm ring-1 ring-indigo-50'}`}>
              <div className="flex justify-between items-center">
                <span className="text-slate-700 font-medium">{n.message}</span>
                {!n.read && <span className="px-2 py-1 bg-indigo-500 text-[10px] text-white rounded-full font-black uppercase">New</span>}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 pt-6 border-t flex justify-between items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          <span>User: {user.name} ({user.role})</span>
          <span className="text-indigo-500 underline">Strategy: Server-Side Rendering (SSR)</span>
        </footer>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getDashboardData();
  return {
    props: {
      ...data,
      currentTime: new Date().toLocaleTimeString()
    }
  };
};