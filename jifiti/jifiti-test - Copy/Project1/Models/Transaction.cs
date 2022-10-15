namespace Project1.Models
{
    public class Transaction
    {
        public int Id { set; get; }
        public int Amount { set; get; }
        public int CardId { set; get; }
        public TransType TransType { set; get; }


    }

    public enum TransType
    {
        AUTH = 1,
        COMMIT = 2,
        REFUND = 3
    }
}
