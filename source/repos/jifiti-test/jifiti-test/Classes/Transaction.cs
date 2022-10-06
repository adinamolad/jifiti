using jifiti_test.Classes;
using static System.Net.WebRequestMethods;
using System.Diagnostics;

namespace jifiti_test.Classes
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
