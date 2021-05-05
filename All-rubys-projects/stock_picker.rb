def stock_picker(stocks_prices) #main method 

	buy_days = [] # array for buying days

	difference = [] # array for difference

	stocks_prices.each_with_index do |buy_price, buy_index| # iterating over stocks_prices to get the value of each "buyprice"
    profit = [] # array to the profit
    puts profit
    buy_days << profit # add the value of profit at the end of buy_days array


    stocks_prices.each_with_index do |sell_price, sell_index| # iterating over stocks_prices to get the value of each "sellprice"
      profit << sell_price - buy_price # now profit get at it end the difference between buy and sell
      difference << sell_price - buy_price if buy_index < sell_index 
    end
  end
  
   # now difference will stock the difference between buy and sell only  buy_index is less than sell_index

    buy_days.index do |day_index|
      if day_index.include?(difference.max) # is the max value of the difference[] is equal to day_index
        last_buy_day = buy_days.index(day_index) 
        last_difference = day_index.index(difference.max)
        puts "[day: #{last_buy_day}, difference: #{last_difference}]"
      end 
    end
	# puts "[#{buy.index(buy.max)}, #{buy[buy.index(buy.max)][buy.index(buy.max)]}]"
end


stock_picker([17,3,6,9,15,8,6,1,10])