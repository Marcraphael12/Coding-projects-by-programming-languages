# Old code with some issues

#def bubble_sort(array)
#  array_length = array.length
#  if array_length <= 1# return the array itself iif there is no or one element inside
#    return array 
#  end

#  for i in 0..array_length do

#    swapped = false # checked that we don't run into an infinite loop scenario.
#    ( array_length - 1 ).times do |i|# subtract one because Ruby arrays are zero-index based

#    end

#    if array[i] > array[i+1]

#      array[i], array[i+1] = array[i+1], array[i] # changes the place of side left and side right respectively

#      swapped = true
#    end

#    break if not swapped

#  end
#  array
#end
#unsorted_array = [11,5,7,6,15]
#puts bubble_sort(unsorted_array)

#here start the updates
def bubble_sort(array)
  array_length = array.length
  
  for i in 0..array_length # this loop
    swapped = true

    for j in 0...(array_length - i - 1) do

      if array[j] > array[j+1]

        array[j], array[j + 1] = array[j + 1], array[j] # changes the place of side left and side right respectively
        swapped = false
      end

    end
    break if swapped

  end
  array

end

data = [11,5,7,6,15]

sorted_array = bubble_sort(data)

puts "Sorting array: #{sorted_array} Thank you ✌🏾✌🏾✌🏾"

# ==> Sorting array: [5, 6, 7, 11, 15] Thank you ✌🏾✌🏾✌🏾