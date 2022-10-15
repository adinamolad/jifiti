using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nancy.Json;
using Project1.Models;
using System.Diagnostics;

namespace Project1.Controllers
{
    [Route("applications")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        private readonly ILogger<ApplicationController> _logger;
        private readonly HttpClient httpClient = new HttpClient();

        private const string authorization = "9874654654987654658";
        private const string readyUrl = "https://rpnszaidmg.execute-api.eu-west-1.amazonaws.com/Prod";


        public ApplicationController(ILogger<ApplicationController> logger)
        {
            _logger = logger;
            httpClient.DefaultRequestHeaders.Add("Authorization", authorization);
        }

        [HttpGet]
        public async Task<IEnumerable<Application>> Get()
        {
            List<Application> applicationList = new List<Application>();
            try
            {
                var response = await httpClient.GetAsync(readyUrl + "/applications");
                response.EnsureSuccessStatusCode();
                string sResponse = await response.Content.ReadAsStringAsync();
                JavaScriptSerializer js = new JavaScriptSerializer();
                applicationList = js.Deserialize<List<Application>>(sResponse);
            }
            catch (Exception ex)
            {
                Trace.WriteLine(ex.Message);
            }

            return applicationList;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<List<FullTransaction>> Get(int id)
        {
            List<Transaction> transactionList = new List<Transaction>();
            List<Card> cardList = new List<Card>();
            List<FullTransaction> fullTransactionList = new List<FullTransaction>();

            try
            {
                var response = await httpClient.GetAsync(readyUrl + "/trans/" + id);
                response.EnsureSuccessStatusCode();
                string sResponse = await response.Content.ReadAsStringAsync();
                JavaScriptSerializer js = new JavaScriptSerializer();
                transactionList = js.Deserialize<List<Transaction>>(sResponse);

                response = await httpClient.GetAsync(readyUrl + "/cards/" + id);
                response.EnsureSuccessStatusCode();
                sResponse = await response.Content.ReadAsStringAsync();
                js = new JavaScriptSerializer();
                cardList = js.Deserialize<List<Card>>(sResponse);


                foreach (Transaction transaction in transactionList)
                {
                    int cardId = transaction.CardId;
                    FullTransaction fullTransaction = new FullTransaction();
                    fullTransaction.Id = transaction.Id;
                    fullTransaction.Amount = transaction.Amount;
                    fullTransaction.TransType = transaction.TransType;


                    if (cardList != null)
                    {
                        Card? card = cardList?.Find(x => x.Id == cardId);
                        if (card != null)
                        {
                            fullTransaction.CardNo = card.CardNo;
                            fullTransaction.Issuer = card.Issuer;
                        }
                    }

                    fullTransactionList.Add(fullTransaction);
                }

            }
            catch (Exception ex)
            {
                Trace.WriteLine(ex.Message);
            }

            return fullTransactionList;
        }
    }
}
