<template>
  <div class="container">
    <b-row class="show">
      <b-col>
        <div class="b-row"> <div>
          <h1> The Auction <span>#{{ numAuctions + 1 }}</span> </h1>
            <hr>
            <div>
              <b-row class="title">
                <b-col sm="3">
                  <label for="title"> 
                    The Title: 
                  </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input
                      id="title"
                      size="sm"
                      v-model="title"
                      type="text"
                      placeholder=""/>
                </b-col>
              </b-row>
            </div>
            <div>
              <b-row class="initPrice">
                <b-col sm="3">
                  <label for="initPrice">
                    Init Price:
                  </label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="initPrice"
                    size="sm"
                    v-model="initPrice"
                    type="text"
                    placeholder=""/>
                </b-col>
              </b-row>
            </div>
            <div>
              <b-row class="minIncrePrice">
                <b-col sm="3">
                  <label for="minIncrePrice"> 
                    Min Incre Price: 
                  </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input
                      id="minIncrePrice"
                      size="sm"
                      v-model="minIncrePrice"
                      type="text"
                      placeholder=""/>
                </b-col>
              </b-row>
            </div>
            <div>
              <b-row class="biddingTime">
                <b-col sm="3">
                  <label for="biddingTime"> 
                    Bidding Time: 
                  </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input
                      id="biddingTime"
                      size="sm"
                      v-model="biddingTime"
                      type="text"
                      placeholder=""/>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
        <div class="b-row">
          <div>
            <label for="description">
              Description:
            </label>
            <br>
            <b-col sm="14">
            <b-form-textarea
              id="description"
              size="sm"
              v-model="description"
              rows="4"
            />
            </b-col>
          </div>
        </div>
        <hr>
        <div class="b-row">
          <div>
            <b-button variant="primary"
              @click="createAuction">
              Create
            </b-button>
            <img
              v-show="isLoad"
              src="https://media.giphy.com/media/2A6xoqXc9qML9gzBUE/giphy.gif">
          </div>
        </div>
      </b-col>
      <b-col>
        <div v-show="isShow">
          <div>
            <b-button @click="showAlert" variant="info" class="m-1">
              Remaining Time
            </b-button>
            <b-alert
              :show="dismissCountDown"
              variant="warning"
              dismissible
              @dismissed="dismissCountDown=0"
              @dismiss-count-down="countDownChanged">
              <p>{{ dismissCountDown }}</p>
            </b-alert>
          </div>
          <b-card-group class="mb-3">
            <b-card
              :title="'#' + auctionInfor[1]"
              tag="article"
              style="max-width: 50rem;"
              class="mb-2">
              <hr>
              <b-list-group flush>
                <b-list-group-item>Owner: <span>{{ auctionInfor[0] }}</span></b-list-group-item>
                <b-list-group-item>State: <span>{{ state }}</span></b-list-group-item>
                <b-list-group-item>Bidding Time: <span>{{ auctionInfor[5] }}</span> </b-list-group-item>
                <b-list-group-item>Init Price: <span>{{ auctionInfor[2] }}</span> </b-list-group-item>
                <b-list-group-item>Min Incre Price: <span>{{ auctionInfor[3] }}</span></b-list-group-item>
                <b-list-group-item>Highest Bidder: <span>{{ highestBidder }}</span></b-list-group-item>
                <b-list-group-item>Number Bidders: <span>{{ numBidders }}</span></b-list-group-item>
              </b-list-group>
              <p class="card-text, mt-3">
                Highest Price: {{ highestPrice }}
              </p>
              <div>
                <form>
                  <b-input-group>
                    <b-form-input
                      v-model="bidPrice"/>
                    <b-input-group-append>
                      <b-button variant="primary" @click="handleBid">Place Bid</b-button>
                      <img
                        v-show="isBid"
                        id="isBid"
                        src="https://media.giphy.com/media/2A6xoqXc9qML9gzBUE/giphy.gif">
                    </b-input-group-append>
                  </b-input-group>
                </form>
              </div>
              <b-button
                class="mt-3"
                variant="danger"
                @click="handleCancelOrFinish()">
                {{ finishStatus }}
              </b-button>
              <img
                v-show="isFinished"
                id="isFinished"
                src="https://media.giphy.com/media/2A6xoqXc9qML9gzBUE/giphy.gif">
            </b-card>
          </b-card-group>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import web3 from '../contracts/web3';
import Auction from '../contracts/AuctionInstance';
import AuctionController from '../contracts/AuctionController';
import AuctionInstance from '../contracts/AuctionInstance';

export default {
  name: 'APP',
  data() {
    return {
      title: '',
      initPrice: '',
      minIncrePrice: '',
      biddingTime: '',
      description: '',
      numAuctions: 0,
      highestBidder: '',
      highestPrice: 0,
      auctionInfor: [],
      isShow: false,
      isLoad: false,
      isBid: false,
      isWithdrawl: false,
      isFinished: false,
      bidPrice: '',
      auctionAddress: '',
      numBidders: 0,
      finishStatus: 'Finish',
      winning: 'GetWin',
      state:'Running',
      dismissCountDown: 0
    };
  },
  beforeMount() {
    // AuctionController method: GetAllAuctions()
    AuctionController.methods
      .GetAllAuctions()
      .call()
      .then((auctions) => {
        this.numAuctions = auctions.length;
        console.log(auctions);
    });
  },
  methods: {
    createAuction() {
      // get accounts
      web3.eth.getAccounts().then((accounts) => {
        // convert 'ether' to 'wei'
        const initPrice = web3.utils.toWei(this.initPrice, 'ether');
        const minIncrePrice = web3.utils.toWei(this.minIncrePrice, 'ether');
        // createAuction in AuctionBox contract
        this.isLoad = true;
        return AuctionController.methods.CreateAuction(this.biddingTime,this.title, initPrice, minIncrePrice,this.description)
          .send({ from: accounts[0] });
      }).then(() => {
        // Set default properties
        this.isLoad = false;
        this.title = '';
        this.biddingTime = '';
        this.initPrice = '';
        this.minIncrePrice = '';
        this.description = '';
        
        return AuctionController.methods.GetAllAuctions().call();
      }).then((auctions) => {
        const index = auctions.length - 1;
        console.log(auctions[index]);
        // get the contract address of the previous auction
        this.auctionAddress = auctions[index];
        // set the address as the parameter
        const auctionInstance = Auction(auctions[index]);
        return auctionInstance.methods.GetAuctionInfor().call();
      })
        .then((lists) => {
          console.log(lists);
          const auctionLists = lists;
          // convert 'wei' to 'ether'
          auctionLists[2] = web3.utils.fromWei(auctionLists[2], 'ether');
          auctionLists[3] = web3.utils.fromWei(auctionLists[3], 'ether');
          this.auctionInfor = auctionLists;
          this.isShow = true;
          this.numAuctions += 1;
          this.state = 'Running';
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleBid() {
      // convert 'ether' to 'wei'
      const bidPriceWei = web3.utils.toWei(this.bidPrice, 'ether');
      // get the wallet adddress
      const fromAddress = web3.eth.accounts.givenProvider.selectedAddress;
      // set the address as the parameter
      const selectedAuction = Auction(this.auctionAddress);
      this.isBid = true;
      // bid in Auction contract
      selectedAuction.methods
        .Bid()
        .send({
          from: fromAddress,
          value: bidPriceWei,
        })
        .then(() => {
          this.isBid = false;
          this.bidPrice = '';;
          return selectedAuction.methods.GetNumberBidders().call();
        }).then((nums) => {
          this.numBidders = nums;
          return selectedAuction.methods.highestBidder.call().call();
        })
        .then((highBid) => {
          this.highestBidder = highBid;
          return selectedAuction.methods.highestPrice.call().call();
        })
        .then((highPrice) => {
          this.highestPrice = web3.utils.fromWei(highPrice, 'ether');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCancelOrFinish() {
        // get accounts
        web3.eth.getAccounts().then((accounts) => {
        // set the address as the parameter
        const selectedAuction = Auction(this.auctionAddress);
        this.isFinished = true;
        // FinisheAuction() in Auction contract
        selectedAuction.methods
          .CancelOrFinish()
          .send({ from: accounts[0] })
          .then(() => {
            this.isFinished = false;
            // this.finishStatus = 'Finish';
            return selectedAuction.methods.GetState.call();
          })
          .then((res) =>{
            if(res === 0) this.state = 'Running';
            else this.state = 'Finished';
          });
      });
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
        // set the address as the parameter
        const selectedAuction = Auction(this.auctionAddress);
        selectedAuction.methods.GetRemainingTime().call()
          .then((res) => {
            this.dismissCountDown = res;
          });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  width: 30px;
}

#isFinished{
  margin-top: 10px;
  margin-left: 5px;
  height: 30px;
}

#isBid{
  margin-top: 5px;
  margin-left: 5px;
  height: 30px;
}
</style>
