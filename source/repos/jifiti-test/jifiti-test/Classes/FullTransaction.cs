namespace jifiti_test.Classes
{
    public class FullTransaction
    {
        public int Id { set; get; }
        public int Amount { set; get; }
        public TransType TransType { set; get; }

        public long CardNo { set; get; }
        public string? Issuer { set; get; }
    }
}
