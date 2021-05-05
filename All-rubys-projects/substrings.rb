def substrings(string, dict)#global method
  dictionaryHash = {} #global dictionary container

  dict.each do |word|
    passNum = string.downcase.scan(word).length#return an array with the occurency of each word finded in string
    dictionaryHash[word] = passNum unless passNum == 0
    end
    dictionaryHash
  end
dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
string = "Howdy partner, sit down! How's it going?"

puts substrings(string, dictionary)

# output: {"down"=>1, "go"=>1, "going"=>1, "how"=>2, "howdy"=>1, 
# 	"it"=>2, "i"=>3, "own"=>1, "part"=>1, "partner"=>1, "sit"=>1}