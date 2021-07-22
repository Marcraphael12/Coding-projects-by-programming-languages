
def caesar_cipher(text, shift)
  for i in 0...text.length do
    letterIndex = text[i].ord
    
    (a, z) = case letterIndex #Upper and Lower cases letters
             when 97..122 then [97, 122]   # a-z
             when 65..90  then [65, 90]    # A-Z
             else next
    end

    swicht = shift > 0 ? 26 : -26

    letterIndex += shift
    letterIndex -= swicht unless letterIndex.between?(a, z)

    text[i] = letterIndex.chr
  end
end
puts "type your text to see the result"
message = gets.chomp
puts "now type the shift to see (number only)"
n_shift = gets.chomp.to_i
caesar_cipher(message, n_shift)

puts "your encrypt message is: '#{message}'✌🏾✌🏾✌🏾 "
