export default interface IActivity {
  id: number;
  outbound: string;
  from: number;
  to: number;
  via: number;
  duration: number;
  call_type: string;
  is_archived: boolean;
  created_at: string;
}