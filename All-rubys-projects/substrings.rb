def substrings(string, dict)#global method
  dictionaryHash = {} #global dictionary container

  dict.each do |word|
    passNum = string.downcase.scan(word).length#return an array with the occurency of each word finded in string
    dictionaryHash[word] = passNum unless passNum == 0
    end
    dictionaryHash
  end
dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

puts "enter your own string"
string = gets.chomp

count = substrings(string, dictionary)
puts "#{count} Thank you ✌🏾✌🏾✌🏾"
# output: return a hash by showing you words that are in  the dictionary and how many there is.
#it does'nt print word that are not in dictionary