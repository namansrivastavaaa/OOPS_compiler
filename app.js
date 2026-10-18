/* ==========================================================================
   Specialized OOP Compiler — Application Logic (Java & Python)
   ========================================================================== */

// ---- Question Templates (Skeleton only — no solutions!) ----
const QUESTIONS = [
  {
    id: 1,
    name: "Player Class",
    description: `<h3>Question 1: Player Class</h3>
<p>Create a class <code>Player</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>name</code> (String), <code>runs</code> (int)</li>
  <li><code>playerType</code> (String), <code>matchType</code> (String)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>findPlayerWithLowestRuns</code></p>
<ul>
  <li>Input: Player[] and a playerType</li>
  <li>Find the lowest runs scored by players with the given type</li>
  <li>Ignore case while comparing playerType</li>
  <li>If no match is found, return 0</li>
</ul>
<p><strong>Method 2:</strong> <code>findPlayerByMatchType</code></p>
<ul>
  <li>Input: Player[] and a matchType</li>
  <li>Find all players matching the given match type (ignore case)</li>
  <li>Sort matching players by id in descending order</li>
  <li>Return the sorted array</li>
  <li>If no player matches, return null</li>
</ul>
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, name, runs, playerType, and matchType.</li>
  <li>In the last two lines, take playerType and matchType for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
1
Virat
12000
Batsman
ODI
2
Rohit
9500
Batsman
T20
3
Bumrah
200
Bowler
ODI
4
Jadeja
2500
Batsman
ODI
Batsman
ODI</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Lowest runs by Batsman = 2500
Players in ODI sorted by id desc:
4 Jadeja
3 Bumrah
1 Virat</div>`,
    code: "",
    stdin: `4
1
Virat
12000
Batsman
ODI
2
Rohit
9500
Batsman
T20
3
Bumrah
200
Bowler
ODI
4
Jadeja
2500
Batsman
ODI
Batsman
ODI`,
    expectedOutput: `Lowest runs by Batsman = 2500
Players in ODI sorted by id desc:
4 Jadeja
3 Bumrah
1 Virat`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `4
1
Virat
12000
Batsman
ODI
2
Rohit
9500
Batsman
T20
3
Bumrah
200
Bowler
ODI
4
Jadeja
2500
Batsman
ODI
Batsman
ODI`,
        expectedOutput: `Lowest runs by Batsman = 2500
Players in ODI sorted by id desc:
4 Jadeja
3 Bumrah
1 Virat`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `4
10
Rahul
4500
Batsman
T20
20
Shami
800
Bowler
Test
30
Ashwin
1200
AllRounder
Test
40
Pant
3800
WicketKeeper
Test
Bowler
Test`,
        expectedOutput: `Lowest runs by Bowler = 800
Players in Test sorted by id desc:
40 Pant
30 Ashwin
20 Shami`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `5
101
Hardik
3200
AllRounder
T20
102
Axar
1800
AllRounder
T20
103
Gill
2200
Batsman
ODI
104
Washington
1500
AllRounder
Test
105
Surya
4100
Batsman
T20
allrounder
t20`,
        expectedOutput: `Lowest runs by allrounder = 1500
Players in t20 sorted by id desc:
105 Surya
102 Axar
101 Hardik`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `3
1
Dhoni
10500
WicketKeeper
ODI
2
Yuvraj
8700
AllRounder
ODI
3
Zaheer
600
Bowler
ODI
WicketKeeper
ODI`,
        expectedOutput: `Lowest runs by WicketKeeper = 10500
Players in ODI sorted by id desc:
3 Zaheer
2 Yuvraj
1 Dhoni`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `4
1
Virat
12000
Batsman
ODI
2
Rohit
9500
Batsman
T20
3
Bumrah
200
Bowler
ODI
4
Jadeja
2500
Batsman
ODI
Batsman
Test`,
        expectedOutput: `Lowest runs by Batsman = 2500
null`
      }
    ]
  },
  {
    id: 2,
    name: "Laptop Class",
    description: `<h3>Question 2: Laptop Class</h3>
<p>Create a class <code>Laptop</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>brand</code> (String), <code>osType</code> (String)</li>
  <li><code>price</code> (double), <code>rating</code> (int)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>countOfLaptopsByBrand</code></p>
<ul>
  <li>Input: Laptop[] and a brand</li>
  <li>Count laptops whose brand matches (ignore case)</li>
  <li>Count only laptops with rating greater than 3</li>
  <li>Return the count</li>
</ul>
<p><strong>Method 2:</strong> <code>searchLaptopByOsType</code></p>
<ul>
  <li>Input: Laptop[] and an OS type</li>
  <li>Find all laptops matching the given OS type (ignore case)</li>
  <li>Sort matching laptops by id in descending order</li>
  <li>Return the sorted array</li>
  <li>If no match is found, return null</li>
</ul>
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, brand, osType, price, and rating.</li>
  <li>In the last two lines, take brand and osType for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
1
Dell
Windows
55000
4
2
HP
Windows
48000
3
3
Apple
MacOS
120000
5
4
Dell
Linux
62000
5
Dell
Windows</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Count of Dell laptops with rating > 3 = 2
Laptops with OS Windows sorted by id desc:
2 HP
1 Dell</div>`,
    code: "",
    stdin: `4
1
Dell
Windows
55000
4
2
HP
Windows
48000
3
3
Apple
MacOS
120000
5
4
Dell
Linux
62000
5
Dell
Windows`,
    expectedOutput: `Count of Dell laptops with rating > 3 = 2
Laptops with OS Windows sorted by id desc:
2 HP
1 Dell`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `4
1
Dell
Windows
55000
4
2
HP
Windows
48000
3
3
Apple
MacOS
120000
5
4
Dell
Linux
62000
5
Dell
Windows`,
        expectedOutput: `Count of Dell laptops with rating > 3 = 2
Laptops with OS Windows sorted by id desc:
2 HP
1 Dell`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `4
101
Lenovo
Windows
65000
5
102
Asus
Linux
72000
4
103
Lenovo
Linux
58000
4
104
Acer
Windows
45000
2
Lenovo
Linux`,
        expectedOutput: `Count of Lenovo laptops with rating > 3 = 2
Laptops with OS Linux sorted by id desc:
103 Lenovo
102 Asus`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `4
1
Apple
MacOS
150000
3
2
Apple
MacOS
180000
2
3
Apple
MacOS
210000
5
4
Dell
Windows
60000
4
Apple
MacOS`,
        expectedOutput: `Count of Apple laptops with rating > 3 = 1
Laptops with OS MacOS sorted by id desc:
3 Apple
2 Apple
1 Apple`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `3
5
hp
windows
42000
4
6
HP
Linux
51000
5
7
MSI
windows
85000
4
HP
WINDOWS`,
        expectedOutput: `Count of HP laptops with rating > 3 = 2
Laptops with OS WINDOWS sorted by id desc:
7 MSI
5 hp`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `4
1
Dell
Windows
55000
4
2
HP
Windows
48000
3
3
Apple
MacOS
120000
5
4
Dell
Linux
62000
5
Dell
Ubuntu`,
        expectedOutput: `Count of Dell laptops with rating > 3 = 2
null`
      }
    ]
  },
  {
    id: 3,
    name: "Hotel Class",
    description: `<h3>Question 3: Hotel Class</h3>
<p>Create a class <code>Hotel</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>name</code> (String), <code>date</code> (String)</li>
  <li><code>rooms</code> (int), <code>wifi</code> (String), <code>bill</code> (double)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>noOfRoomsBookedInGivenMonth</code></p>
<ul>
  <li>Input: Hotel[] and a month</li>
  <li>Calculate total rooms booked in that month</li>
  <li>Date is in DD-MM-YYYY format — extract the month</li>
  <li>Return the total rooms booked</li>
</ul>
<p><strong>Method 2:</strong> <code>searchHotelByWifiOption</code></p>
<ul>
  <li>Input: Hotel[] and a Wi-Fi option</li>
  <li>Find all hotels matching wifi option (ignore case)</li>
  <li>Sort matching hotels by bill amount in descending order</li>
  <li>Return the second hotel in the sorted list</li>
  <li>If no matching hotel exists, return null</li>
</ul>
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, name, date, rooms, wifi, and bill.</li>
  <li>In the last two lines, take month and wifi option for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
101
Royal Stay
12-05-2024
3
Free
2500
102
Green Park
16-08-2024
5
Paid
4200
103
City Inn
05-05-2024
2
Free
1800
104
Sunset Hotel
18-09-2024
4
Free
3600
05
Free</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Total rooms booked in month 5 = 5
Second hotel with WiFi option Free by bill amount descending:
101 Royal Stay</div>`,
    code: "",
    stdin: `4
101
Royal Stay
12-05-2024
3
Free
2500
102
Green Park
16-08-2024
5
Paid
4200
103
City Inn
05-05-2024
2
Free
1800
104
Sunset Hotel
18-09-2024
4
Free
3600
05
Free`,
    expectedOutput: `Total rooms booked in month 5 = 5
Second hotel with WiFi option Free by bill amount descending:
101 Royal Stay`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `4
101
Royal Stay
12-05-2024
3
Free
2500
102
Green Park
16-08-2024
5
Paid
4200
103
City Inn
05-05-2024
2
Free
1800
104
Sunset Hotel
18-09-2024
4
Free
3600
05
Free`,
        expectedOutput: `Total rooms booked in month 5 = 5
Second hotel with WiFi option Free by bill amount descending:
101 Royal Stay`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `4
201
Grand Palace
10-11-2023
6
Free
8500
202
Ocean Breeze
15-11-2023
4
Free
9200
203
Mountain View
22-12-2023
3
Paid
4500
204
Sea View
08-11-2023
5
Free
6000
11
Free`,
        expectedOutput: `Total rooms booked in month 11 = 15
Second hotel with WiFi option Free by bill amount descending:
201 Grand Palace`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `4
11
Lake Resort
01-03-2024
8
Paid
12000
12
Pine Villa
14-04-2024
2
Paid
3500
13
Hill Top
25-03-2024
7
Paid
8000
14
River Side
30-03-2024
4
Paid
9500
03
Paid`,
        expectedOutput: `Total rooms booked in month 3 = 19
Second hotel with WiFi option Paid by bill amount descending:
14 River Side`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `4
1
Hotel Alpha
12-07-2024
2
FREE
3000
2
Hotel Beta
15-07-2024
3
free
7000
3
Hotel Gamma
20-07-2024
1
Free
5000
4
Hotel Delta
25-08-2024
5
Paid
8000
07
free`,
        expectedOutput: `Total rooms booked in month 7 = 6
Second hotel with WiFi option free by bill amount descending:
3 Hotel Gamma`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `4
101
Royal Stay
12-05-2024
3
Free
2500
102
Green Park
16-08-2024
5
Paid
4200
103
City Inn
05-05-2024
2
Free
1800
104
Sunset Hotel
18-09-2024
4
Free
3600
05
Complementary`,
        expectedOutput: `Total rooms booked in month 5 = 5
null`
      }
    ]
  },
  {
    id: 4,
    name: "Movie Class",
    description: `<h3>Question 4: Movie Class</h3>
<p>Create a class <code>Movie</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>title</code> (String), <code>genre</code> (String)</li>
  <li><code>rating</code> (double), <code>language</code> (String)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>findHighestRatedByGenre</code></p>
<ul>
  <li>Input: Movie[] and a genre</li>
  <li>Find the movie with the highest rating in the given genre</li>
  <li>Ignore case while comparing genre</li>
  <li>If no match is found, return null</li>
</ul>
<p><strong>Method 2:</strong> <code>findMoviesByLanguage</code></p>
<ul>
  <li>Input: Movie[] and a language</li>
  <li>Find all movies matching the given language (ignore case)</li>
  <li>Sort matching movies by rating in descending order</li>
  <li>Return the sorted array</li>
  <li>If no movie matches, return null</li>
</ul>
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, title, genre, rating, and language.</li>
  <li>In the last two lines, take genre and language for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
1
Inception
Sci-Fi
8.8
English
2
Interstellar
Sci-Fi
8.6
English
3
Dangal
Drama
8.4
Hindi
4
3Idiots
Drama
8.1
Hindi
Sci-Fi
English</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Highest rated Sci-Fi movie: 1 Inception 8.8
Movies in English sorted by rating desc:
1 Inception 8.8
2 Interstellar 8.6</div>`,
    code: "",
    stdin: `4
1
Inception
Sci-Fi
8.8
English
2
Interstellar
Sci-Fi
8.6
English
3
Dangal
Drama
8.4
Hindi
4
3Idiots
Drama
8.1
Hindi
Sci-Fi
English`,
    expectedOutput: `Highest rated Sci-Fi movie: 1 Inception 8.8
Movies in English sorted by rating desc:
1 Inception 8.8
2 Interstellar 8.6`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `4
1
Inception
Sci-Fi
8.8
English
2
Interstellar
Sci-Fi
8.6
English
3
Dangal
Drama
8.4
Hindi
4
3Idiots
Drama
8.1
Hindi
Sci-Fi
English`,
        expectedOutput: `Highest rated Sci-Fi movie: 1 Inception 8.8
Movies in English sorted by rating desc:
1 Inception 8.8
2 Interstellar 8.6`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `4
1
Avatar
Action
7.8
English
2
Gladiator
Action
8.5
English
3
Parasite
Thriller
8.6
Korean
4
Oldboy
Thriller
8.4
Korean
Action
Korean`,
        expectedOutput: `Highest rated Action movie: 2 Gladiator 8.5
Movies in Korean sorted by rating desc:
3 Parasite 8.6
4 Oldboy 8.4`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `4
10
RRR
Action
8.0
Telugu
20
Baahubali
Action
8.2
Telugu
30
Pushpa
Action
7.6
Telugu
40
KGF
Action
8.3
Kannada
Action
Telugu`,
        expectedOutput: `Highest rated Action movie: 40 KGF 8.3
Movies in Telugu sorted by rating desc:
20 Baahubali 8.2
10 RRR 8.0
30 Pushpa 7.6`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `3
101
Hera Pheri
Comedy
8.2
Hindi
102
Dhamaal
Comedy
7.4
Hindi
103
Golmaal
Comedy
7.5
Hindi
comedy
hindi`,
        expectedOutput: `Highest rated comedy movie: 101 Hera Pheri 8.2
Movies in hindi sorted by rating desc:
101 Hera Pheri 8.2
103 Golmaal 7.5
102 Dhamaal 7.4`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `4
1
Inception
Sci-Fi
8.8
English
2
Interstellar
Sci-Fi
8.6
English
3
Dangal
Drama
8.4
Hindi
4
3Idiots
Drama
8.1
Hindi
Sci-Fi
Spanish`,
        expectedOutput: `Highest rated Sci-Fi movie: 1 Inception 8.8
null`
      }
    ]
  },
  {
    id: 5,
    name: "Insurance Class",
    description: `<h3>Question 5: Insurance Class</h3>
<p>Create a class <code>Insurance</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>customerName</code> (String), <code>planType</code> (String)</li>
  <li><code>premium</code> (double), <code>tenure</code> (int)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>totalPremiumByPlanType</code></p>
<ul>
  <li>Input: Insurance[] and a planType</li>
  <li>Calculate total premium of all policies matching the planType</li>
  <li>Ignore case while comparing planType</li>
  <li>If no match is found, return 0</li>
</ul>
<p><strong>Method 2:</strong> <code>searchInsuranceByTenure</code></p>
<ul>
  <li>Input: Insurance[] and a minimum tenure (int)</li>
  <li>Find all policies with tenure >= given minimum tenure</li>
  <li>Sort matching policies by premium in ascending order</li>
  <li>Return the sorted array</li>
  <li>If no policy matches, return null</li>
</ul>
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, customerName, planType, premium, and tenure.</li>
  <li>In the last two lines, take planType and minimum tenure for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
1
Alice
Gold
15000
5
2
Bob
Silver
8000
3
3
Charlie
Gold
12000
4
4
Diana
Platinum
25000
10
Gold
4</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Total premium for Gold = 27000.0
Policies with tenure >= 4 sorted by premium asc:
3 Charlie 12000.0
1 Alice 15000.0
4 Diana 25000.0</div>`,
    code: "",
    stdin: `4
1
Alice
Gold
15000
5
2
Bob
Silver
8000
3
3
Charlie
Gold
12000
4
4
Diana
Platinum
25000
10
Gold
4`,
    expectedOutput: `Total premium for Gold = 27000.0
Policies with tenure >= 4 sorted by premium asc:
3 Charlie 12000.0
1 Alice 15000.0
4 Diana 25000.0`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `4
1
Alice
Gold
15000
5
2
Bob
Silver
8000
3
3
Charlie
Gold
12000
4
4
Diana
Platinum
25000
10
Gold
4`,
        expectedOutput: `Total premium for Gold = 27000.0
Policies with tenure >= 4 sorted by premium asc:
3 Charlie 12000.0
1 Alice 15000.0
4 Diana 25000.0`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `4
10
Bruce
Term
10000
15
20
Clark
Health
8500
10
30
Barry
Term
12500
20
40
Arthur
Health
6500
8
Term
10`,
        expectedOutput: `Total premium for Term = 22500.0
Policies with tenure >= 10 sorted by premium asc:
20 Clark 8500.0
10 Bruce 10000.0
30 Barry 12500.0`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `4
1
John
Life
18000
7
2
Jane
Life
22000
12
3
Jack
Vehicle
5000
2
4
Jill
Life
14000
5
Life
6`,
        expectedOutput: `Total premium for Life = 54000.0
Policies with tenure >= 6 sorted by premium asc:
1 John 18000.0
2 Jane 22000.0`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `3
101
Peter
Health
9500
5
102
Tony
Premium
50000
10
103
Steve
health
11500
8
health
5`,
        expectedOutput: `Total premium for health = 21000.0
Policies with tenure >= 5 sorted by premium asc:
101 Peter 9500.0
103 Steve 11500.0
102 Tony 50000.0`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `4
1
Alice
Gold
15000
5
2
Bob
Silver
8000
3
3
Charlie
Gold
12000
4
4
Diana
Platinum
25000
10
Gold
25`,
        expectedOutput: `Total premium for Gold = 27000.0
null`
      }
    ]
  },
  {
    id: 6,
    name: "Coffee Class",
    description: `<h3>Question 6: Coffee Class</h3>
<p>You are tasked with designing the <strong>Coffee Management System</strong>.</p>
<p>Create a class <code>Coffee</code> with private attributes:</p>
<ul>
  <li><code>id</code>: int</li>
  <li><code>name</code>: String</li>
  <li><code>type</code>: String</li>
  <li><code>price</code>: double</li>
</ul>
<p>Make getter, setter, and constructor for the above-mentioned <code>Coffee</code> class.</p>
<p>Create the following two methods / functions:</p>
<p><strong>Task 1: Find all coffees which are priced higher than or equals to the average price of all coffee</strong></p>
<ul>
  <li>Returns the list of coffees whose price is &gt;= average price of all coffee.</li>
  <li>Input: list of coffees.</li>
  <li>Print id, name, type, and price of each matching coffee.</li>
</ul>
<p><strong>Task 2: Find the highest priced coffee based on the type:</strong></p>
<ul>
  <li>Returns the highest priced coffee matching the given type (ignore case).</li>
  <li>Input: list of coffees and type.</li>
  <li>Print id, name, and price for the highest priced coffee.</li>
  <li>If no Coffee is found with that type, print <code>"No Coffee Found"</code>.</li>
</ul>
<p><strong>Note:</strong></p>
<ol>
  <li>Don't hardcode any test/sample data. Read from stdin and print raw output.</li>
  <li>All comparisons should be case-insensitive.</li>
  <li>If the input for the count is 0, print <code>"No Coffee Found"</code>.</li>
</ol>
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects to be taken as input.</li>
  <li>From second line onwards, program takes id, name, type, and price for each object.</li>
  <li>In the last line, take the search type.</li>
</ul>
<div class="sample-label">Sample Input 1</div>
<div class="sample-block">3
1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
3
Bru
instant
100.0
instant</div>
<div class="sample-label">Sample Output 1</div>
<div class="sample-block">1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
1
Davidoff
1015.0</div>
<div class="sample-label">Sample Input 2</div>
<div class="sample-block">0</div>
<div class="sample-label">Sample Output 2</div>
<div class="sample-block">No Coffee Found</div>`,
    code: "",
    stdin: `3
1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
3
Bru
instant
100.0
instant`,
    expectedOutput: `1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
1
Davidoff
1015.0`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `3
1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
3
Bru
instant
100.0
instant`,
        expectedOutput: `1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
1
Davidoff
1015.0`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `4
1
Espresso
Robusta
250.0
2
Cappuccino
Arabica
450.0
3
Latte
Arabica
500.0
4
Americano
Robusta
300.0
Arabica`,
        expectedOutput: `2
Cappuccino
Arabica
450.0
3
Latte
Arabica
500.0
3
Latte
500.0`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `3
10
Nescafe
instant
150.0
20
TataGrand
filter
250.0
30
Continental
instant
200.0
Mocha`,
        expectedOutput: `20
TataGrand
filter
250.0
30
Continental
instant
200.0
No Coffee Found`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `0`,
        expectedOutput: `No Coffee Found`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `3
1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
3
Bru
instant
100.0
decaf`,
        expectedOutput: `1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
No Coffee Found`
      }
    ]
  },
  {
    id: 7,
    name: "Employee & Manager",
    description: `<h3>Question 7: Employee & Manager Inheritance</h3>
<p>Implement an inheritance hierarchy with base class <code>Employee</code> and derived class <code>Manager</code>.</p>

<p><strong>1. Base Class: <code>Employee</code></strong></p>
<ul>
  <li>Private attributes: <code>id</code> (int), <code>name</code> (String), <code>salary</code> (double)</li>
  <li>Parameterized constructor: <code>Employee(int id, String name, double salary)</code></li>
  <li>Getters and setters for all attributes</li>
  <li>Method <code>calculateAnnualSalary()</code>: returns <code>salary * 12</code></li>
</ul>

<p><strong>2. Derived Class: <code>Manager</code> (extends / inherits from <code>Employee</code>)</strong></p>
<ul>
  <li>Additional private attributes: <code>bonus</code> (double), <code>department</code> (String)</li>
  <li>Parameterized constructor invoking base class constructor using <code>super</code></li>
  <li>Getters and setters for <code>bonus</code> and <code>department</code></li>
  <li>Overridden method <code>calculateAnnualSalary()</code>: returns <code>(salary * 12) + bonus</code></li>
</ul>

<p><strong>Method 1:</strong> <code>findManagerWithHighestAnnualSalary</code></p>
<ul>
  <li>Input: Manager[]</li>
  <li>Find the manager with the highest total annual salary</li>
  <li>Return the matching Manager object (or null if empty)</li>
</ul>

<p><strong>Method 2:</strong> <code>findManagersByDepartment</code></p>
<ul>
  <li>Input: Manager[] and department (String)</li>
  <li>Find all managers whose department matches (ignore case)</li>
  <li>Sort matching managers by id in ascending order</li>
  <li>Return the sorted array / list (or null if none)</li>
</ul>

<p><strong>Input Notes:</strong></p>
<ul>
  <li>First line: integer <code>n</code> (number of objects)</li>
  <li>Next lines: <code>id</code>, <code>name</code>, <code>salary</code>, <code>bonus</code>, and <code>department</code> for each manager</li>
  <li>Last line: <code>department</code> for search</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
101
Alice
50000
60000
IT
102
Bob
60000
80000
HR
103
Charlie
45000
50000
IT
104
Diana
55000
70000
IT
IT</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Manager with highest annual salary: 102 Bob 800000.0
Managers in IT sorted by id asc:
101 Alice
103 Charlie
104 Diana</div>`,
    code: "",
    stdin: `4
101
Alice
50000
60000
IT
102
Bob
60000
80000
HR
103
Charlie
45000
50000
IT
104
Diana
55000
70000
IT
IT`,
    expectedOutput: `Manager with highest annual salary: 102 Bob 800000.0
Managers in IT sorted by id asc:
101 Alice
103 Charlie
104 Diana`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `4
101
Alice
50000
60000
IT
102
Bob
60000
80000
HR
103
Charlie
45000
50000
IT
104
Diana
55000
70000
IT
IT`,
        expectedOutput: `Manager with highest annual salary: 102 Bob 800000.0
Managers in IT sorted by id asc:
101 Alice
103 Charlie
104 Diana`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `4
1
Rajesh
70000
120000
Finance
2
Sneha
80000
90000
Marketing
3
Vikram
65000
85000
Finance
4
Amit
72000
95000
Finance
Finance`,
        expectedOutput: `Manager with highest annual salary: 2 Sneha 1050000.0
Managers in Finance sorted by id asc:
1 Rajesh
3 Vikram
4 Amit`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `3
201
Karan
40000
30000
Sales
202
Meera
90000
150000
R&D
203
Rahul
52000
60000
Sales
sales`,
        expectedOutput: `Manager with highest annual salary: 202 Meera 1230000.0
Managers in sales sorted by id asc:
201 Karan
203 Rahul`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `3
11
Pooja
62000
50000
Operations
12
Rohan
75000
110000
Operations
13
Ananya
58000
40000
Legal
Legal`,
        expectedOutput: `Manager with highest annual salary: 12 Rohan 1010000.0
Managers in Legal sorted by id asc:
13 Ananya`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `4
101
Alice
50000
60000
IT
102
Bob
60000
80000
HR
103
Charlie
45000
50000
IT
104
Diana
55000
70000
IT
Marketing`,
        expectedOutput: `Manager with highest annual salary: 102 Bob 800000.0
null`
      }
    ]
  },
  {
    id: 8,
    name: "Product Management",
    description: `<h3>Question 8: Product Management System</h3>
<p>Design a system that manages a company's products. The system must store products, record customer ratings, and identify the best-rated product in a category.</p>

<p><strong>1. Create the <code>Product</code> class</strong></p>
<p>Attributes:</p>
<ul>
  <li><code>id</code> (int) — Unique product ID</li>
  <li><code>name</code> (String) — Product name</li>
  <li><code>category</code> (String) — Product category</li>
  <li><code>price</code> (double) — Product price</li>
  <li><code>ratings</code> (List&lt;Double&gt;) — Ratings received, empty when created</li>
</ul>
<p>Requirements: Provide a parameterized constructor, getters, and setters. Override <code>toString()</code>:</p>
<div class="sample-block">Product [ID: 101, Name: Keyboard, Category: Accessories, Price: 50.0]</div>

<p><strong>2. Create the <code>ProductService</code> class</strong></p>
<p>Store all products in a List and implement the following non-static methods.</p>
<p><strong>A. Add</strong></p>
<ul>
  <li>Add a new product with an empty ratings list.</li>
  <li>If duplicate ID exists, print <code>Product Already Exists</code>.</li>
  <li>On success, print <code>Product Added Successfully</code>.</li>
</ul>
<p><strong>B. Update (Add Rating)</strong></p>
<ul>
  <li>Add the given rating to the product's ratings list by ID.</li>
  <li>On success, print <code>Product updated successfully</code>.</li>
  <li>If ID not found, print <code>Id not found for the product</code>.</li>
</ul>
<p><strong>C. Get</strong></p>
<ul>
  <li>Print details (via <code>toString()</code>) of every product whose name matches (case-insensitive).</li>
  <li>If no match, print <code>No Product Found</code>.</li>
  <li>Preserve insertion order; do not sort.</li>
</ul>
<p><strong>D. Average</strong></p>
<ul>
  <li>Calculate the average of ALL ratings across ALL products.</li>
  <li>If no products or no ratings, print <code>No Product Found</code>.</li>
  <li>Print the average as a double.</li>
</ul>
<p><strong>E. WeightedAverage</strong></p>
<p>Input: a category name and a minimum number of reviews <em>m</em>.</p>
<ul>
  <li>Consider only products in the specified category with at least <em>m</em> ratings.</li>
  <li>Weighted Rating formula: <code>WR = (v*R + m*C) / (v + m)</code>, where R = product's average, v = review count, C = global average, m = minimum reviews.</li>
  <li>Print the name of the product with the highest WR.</li>
  <li>If no product qualifies, print <code>No Product Found</code>.</li>
  <li>Tie-break: choose the product with the lower ID.</li>
  <li>String comparisons are case-insensitive.</li>
</ul>

<p><strong>3. Input format</strong></p>
<ul>
  <li>First line: integer N (number of operations).</li>
  <li>If N = 0, print <code>No Operation Performed</code> and exit.</li>
</ul>
<p>Supported operation formats:</p>
<div class="sample-block">Add: id,name,category,price
Update: id,rating
Get: name
Average
WeightedAverage: category,m</div>

<div class="sample-label">Sample Input</div>
<div class="sample-block">11
Add: 101,Keyboard,Accessories,50.0
Add: 102,Mouse,Accessories,30.0
Add: 103,Keyboard,Accessories,70.0
Add: 101,Keypad,Accessories,15.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: keyboard
Average
WeightedAverage: Accessories,1</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Product Added Successfully
Product Added Successfully
Product Added Successfully
Product Already Exists
Product updated successfully
Product updated successfully
Product updated successfully
Id not found for the product
Product [ID: 101, Name: Keyboard, Category: Accessories, Price: 50.0]
Product [ID: 103, Name: Keyboard, Category: Accessories, Price: 70.0]
4.0
Keyboard</div>`,
    code: "",
    stdin: `11
Add: 101,Keyboard,Accessories,50.0
Add: 102,Mouse,Accessories,30.0
Add: 103,Keyboard,Accessories,70.0
Add: 101,Keypad,Accessories,15.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: keyboard
Average
WeightedAverage: Accessories,1`,
    expectedOutput: `Product Added Successfully
Product Added Successfully
Product Added Successfully
Product Already Exists
Product updated successfully
Product updated successfully
Product updated successfully
Id not found for the product
Product [ID: 101, Name: Keyboard, Category: Accessories, Price: 50.0]
Product [ID: 103, Name: Keyboard, Category: Accessories, Price: 70.0]
4.0
Keyboard`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `11
Add: 101,Keyboard,Accessories,50.0
Add: 102,Mouse,Accessories,30.0
Add: 103,Keyboard,Accessories,70.0
Add: 101,Keypad,Accessories,15.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: keyboard
Average
WeightedAverage: Accessories,1`,
        expectedOutput: `Product Added Successfully
Product Added Successfully
Product Added Successfully
Product Already Exists
Product updated successfully
Product updated successfully
Product updated successfully
Id not found for the product
Product [ID: 101, Name: Keyboard, Category: Accessories, Price: 50.0]
Product [ID: 103, Name: Keyboard, Category: Accessories, Price: 70.0]
4.0
Keyboard`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `7
Add: 201,Headphones,Electronics,1500.0
Add: 202,Speaker,Electronics,2000.0
Add: 203,Earbuds,Electronics,800.0
Update: 201,4.5
Update: 201,3.5
Update: 202,5.0
WeightedAverage: Electronics,1`,
        expectedOutput: `Product Added Successfully
Product Added Successfully
Product Added Successfully
Product updated successfully
Product updated successfully
Product updated successfully
Speaker`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `5
Add: 301,Shirt,Clothing,500.0
Add: 302,Pants,Clothing,800.0
Update: 301,3.0
Update: 301,4.0
Average`,
        expectedOutput: `Product Added Successfully
Product Added Successfully
Product updated successfully
Product updated successfully
3.5`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `6
Add: 401,Laptop,Computers,50000.0
Add: 401,Desktop,Computers,30000.0
Get: laptop
Update: 999,4.0
Average
WeightedAverage: Computers,2`,
        expectedOutput: `Product Added Successfully
Product Already Exists
Product [ID: 401, Name: Laptop, Category: Computers, Price: 50000.0]
Id not found for the product
No Product Found
No Product Found`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `0`,
        expectedOutput: `No Operation Performed`
      }
    ]
  },
  {
    id: 9,
    name: "Book Management",
    description: `<h3>Question 9: Book Management System</h3>
<p>Design a system that manages a library's collection of books. The system must store books, record reader review ratings, and identify the best-rated book in a genre.</p>

<p><strong>1. Create the <code>Book</code> class</strong></p>
<p>Attributes:</p>
<ul>
  <li><code>id</code> (int) — Unique book ID</li>
  <li><code>title</code> (String) — Book title</li>
  <li><code>genre</code> (String) — Book genre</li>
  <li><code>price</code> (double) — Book price</li>
  <li><code>ratings</code> (List&lt;Double&gt;) — Ratings received, empty when created</li>
</ul>
<p>Requirements: Provide a parameterized constructor, getters, and setters. Override <code>toString()</code>:</p>
<div class="sample-block">Book [ID: 101, Title: Clean Code, Genre: Tech, Price: 45.0]</div>

<p><strong>2. Create the <code>BookService</code> class</strong></p>
<p>Store all books in a List and implement the following non-static methods.</p>
<p><strong>A. Add</strong></p>
<ul>
  <li>Add a new book with an empty ratings list.</li>
  <li>If duplicate ID exists, print <code>Book Already Exists</code>.</li>
  <li>On success, print <code>Book Added Successfully</code>.</li>
</ul>
<p><strong>B. Update (Add Rating)</strong></p>
<ul>
  <li>Add the given rating to the book's ratings list by ID.</li>
  <li>On success, print <code>Book updated successfully</code>.</li>
  <li>If ID not found, print <code>Id not found for the book</code>.</li>
</ul>
<p><strong>C. Get</strong></p>
<ul>
  <li>Print details (via <code>toString()</code>) of every book whose genre matches (case-insensitive).</li>
  <li>If no match, print <code>No Book Found</code>.</li>
  <li>Preserve insertion order; do not sort.</li>
</ul>
<p><strong>D. Average</strong></p>
<ul>
  <li>Calculate the average of ALL ratings across ALL books.</li>
  <li>If no books or no ratings, print <code>No Book Found</code>.</li>
  <li>Print the average as a double.</li>
</ul>
<p><strong>E. WeightedAverage</strong></p>
<p>Input: a genre name and a minimum number of reviews <em>m</em>.</p>
<ul>
  <li>Consider only books in the specified genre with at least <em>m</em> ratings.</li>
  <li>Weighted Rating formula: <code>WR = (v*R + m*C) / (v + m)</code>, where R = book's average, v = review count, C = global average, m = minimum reviews.</li>
  <li>Print the title of the book with the highest WR.</li>
  <li>If no book qualifies, print <code>No Book Found</code>.</li>
  <li>Tie-break: choose the book with the lower ID.</li>
  <li>String comparisons are case-insensitive.</li>
</ul>

<p><strong>3. Input format</strong></p>
<ul>
  <li>First line: integer N (number of operations).</li>
  <li>If N = 0, print <code>No Operation Performed</code> and exit.</li>
</ul>
<p>Supported operation formats:</p>
<div class="sample-block">Add: id,title,genre,price
Update: id,rating
Get: genre
Average
WeightedAverage: genre,m</div>

<div class="sample-label">Sample Input</div>
<div class="sample-block">11
Add: 101,Clean Code,Tech,45.0
Add: 102,Design Patterns,Tech,55.0
Add: 103,Refactoring,Tech,50.0
Add: 101,Code Complete,Tech,40.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: tech
Average
WeightedAverage: Tech,1</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Book Added Successfully
Book Added Successfully
Book Added Successfully
Book Already Exists
Book updated successfully
Book updated successfully
Book updated successfully
Id not found for the book
Book [ID: 101, Title: Clean Code, Genre: Tech, Price: 45.0]
Book [ID: 102, Title: Design Patterns, Genre: Tech, Price: 55.0]
Book [ID: 103, Title: Refactoring, Genre: Tech, Price: 50.0]
4.0
Clean Code</div>`,
    code: "",
    stdin: `11
Add: 101,Clean Code,Tech,45.0
Add: 102,Design Patterns,Tech,55.0
Add: 103,Refactoring,Tech,50.0
Add: 101,Code Complete,Tech,40.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: tech
Average
WeightedAverage: Tech,1`,
    expectedOutput: `Book Added Successfully
Book Added Successfully
Book Added Successfully
Book Already Exists
Book updated successfully
Book updated successfully
Book updated successfully
Id not found for the book
Book [ID: 101, Title: Clean Code, Genre: Tech, Price: 45.0]
Book [ID: 102, Title: Design Patterns, Genre: Tech, Price: 55.0]
Book [ID: 103, Title: Refactoring, Genre: Tech, Price: 50.0]
4.0
Clean Code`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `11
Add: 101,Clean Code,Tech,45.0
Add: 102,Design Patterns,Tech,55.0
Add: 103,Refactoring,Tech,50.0
Add: 101,Code Complete,Tech,40.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: tech
Average
WeightedAverage: Tech,1`,
        expectedOutput: `Book Added Successfully
Book Added Successfully
Book Added Successfully
Book Already Exists
Book updated successfully
Book updated successfully
Book updated successfully
Id not found for the book
Book [ID: 101, Title: Clean Code, Genre: Tech, Price: 45.0]
Book [ID: 102, Title: Design Patterns, Genre: Tech, Price: 55.0]
Book [ID: 103, Title: Refactoring, Genre: Tech, Price: 50.0]
4.0
Clean Code`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `7
Add: 201,Dune,SciFi,25.0
Add: 202,Foundation,SciFi,30.0
Add: 203,Neuromancer,SciFi,20.0
Update: 201,4.5
Update: 201,3.5
Update: 202,5.0
WeightedAverage: SciFi,1`,
        expectedOutput: `Book Added Successfully
Book Added Successfully
Book Added Successfully
Book updated successfully
Book updated successfully
Book updated successfully
Foundation`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `5
Add: 301,Hamlet,Drama,15.0
Add: 302,Macbeth,Drama,18.0
Update: 301,3.0
Update: 301,4.0
Average`,
        expectedOutput: `Book Added Successfully
Book Added Successfully
Book updated successfully
Book updated successfully
3.5`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `6
Add: 401,The Hobbit,Fantasy,20.0
Add: 401,Duplicate Hobbit,Fantasy,22.0
Get: history
Update: 999,4.0
Average
WeightedAverage: Fantasy,2`,
        expectedOutput: `Book Added Successfully
Book Already Exists
No Book Found
Id not found for the book
No Book Found
No Book Found`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `0`,
        expectedOutput: `No Operation Performed`
      }
    ]
  },
  {
    id: 10,
    name: "Course Management",
    description: `<h3>Question 10: Course Management System</h3>
<p>Design a system that manages an academy's educational courses. The system must store courses, record student ratings, and identify the top-rated course in a department.</p>

<p><strong>1. Create the <code>Course</code> class</strong></p>
<p>Attributes:</p>
<ul>
  <li><code>id</code> (int) — Unique course ID</li>
  <li><code>title</code> (String) — Course title</li>
  <li><code>department</code> (String) — Department (e.g. CS, EE, Math)</li>
  <li><code>fee</code> (double) — Course fee</li>
  <li><code>ratings</code> (List&lt;Double&gt;) — Ratings received, empty when created</li>
</ul>
<p>Requirements: Provide a parameterized constructor, getters, and setters. Override <code>toString()</code>:</p>
<div class="sample-block">Course [ID: 101, Title: Data Structures, Department: CS, Fee: 350.0]</div>

<p><strong>2. Create the <code>CourseService</code> class</strong></p>
<p>Store all courses in a List and implement the following non-static methods.</p>
<p><strong>A. Add</strong></p>
<ul>
  <li>Add a new course with an empty ratings list.</li>
  <li>If duplicate ID exists, print <code>Course Already Exists</code>.</li>
  <li>On success, print <code>Course Added Successfully</code>.</li>
</ul>
<p><strong>B. Update (Add Rating)</strong></p>
<ul>
  <li>Add the given rating to the course's ratings list by ID.</li>
  <li>On success, print <code>Course updated successfully</code>.</li>
  <li>If ID not found, print <code>Id not found for the course</code>.</li>
</ul>
<p><strong>C. Get</strong></p>
<ul>
  <li>Print details (via <code>toString()</code>) of every course whose department matches (case-insensitive).</li>
  <li>If no match, print <code>No Course Found</code>.</li>
  <li>Preserve insertion order; do not sort.</li>
</ul>
<p><strong>D. Average</strong></p>
<ul>
  <li>Calculate the average of ALL ratings across ALL courses.</li>
  <li>If no courses or no ratings, print <code>No Course Found</code>.</li>
  <li>Print the average as a double.</li>
</ul>
<p><strong>E. WeightedAverage</strong></p>
<p>Input: a department name and a minimum number of reviews <em>m</em>.</p>
<ul>
  <li>Consider only courses in the specified department with at least <em>m</em> ratings.</li>
  <li>Weighted Rating formula: <code>WR = (v*R + m*C) / (v + m)</code>, where R = course's average, v = review count, C = global average, m = minimum reviews.</li>
  <li>Print the title of the course with the highest WR.</li>
  <li>If no course qualifies, print <code>No Course Found</code>.</li>
  <li>Tie-break: choose the course with the lower ID.</li>
  <li>String comparisons are case-insensitive.</li>
</ul>

<p><strong>3. Input format</strong></p>
<ul>
  <li>First line: integer N (number of operations).</li>
  <li>If N = 0, print <code>No Operation Performed</code> and exit.</li>
</ul>
<p>Supported operation formats:</p>
<div class="sample-block">Add: id,title,department,fee
Update: id,rating
Get: department
Average
WeightedAverage: department,m</div>

<div class="sample-label">Sample Input</div>
<div class="sample-block">11
Add: 101,Data Structures,CS,350.0
Add: 102,Algorithms,CS,400.0
Add: 103,Operating Systems,CS,380.0
Add: 101,Duplicate DS,CS,200.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: cs
Average
WeightedAverage: CS,1</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Course Added Successfully
Course Added Successfully
Course Added Successfully
Course Already Exists
Course updated successfully
Course updated successfully
Course updated successfully
Id not found for the course
Course [ID: 101, Title: Data Structures, Department: CS, Fee: 350.0]
Course [ID: 102, Title: Algorithms, Department: CS, Fee: 400.0]
Course [ID: 103, Title: Operating Systems, Department: CS, Fee: 380.0]
4.0
Data Structures</div>`,
    code: "",
    stdin: `11
Add: 101,Data Structures,CS,350.0
Add: 102,Algorithms,CS,400.0
Add: 103,Operating Systems,CS,380.0
Add: 101,Duplicate DS,CS,200.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: cs
Average
WeightedAverage: CS,1`,
    expectedOutput: `Course Added Successfully
Course Added Successfully
Course Added Successfully
Course Already Exists
Course updated successfully
Course updated successfully
Course updated successfully
Id not found for the course
Course [ID: 101, Title: Data Structures, Department: CS, Fee: 350.0]
Course [ID: 102, Title: Algorithms, Department: CS, Fee: 400.0]
Course [ID: 103, Title: Operating Systems, Department: CS, Fee: 380.0]
4.0
Data Structures`,
    testCases: [
      {
        id: 1,
        name: "Case 1",
        isPrivate: false,
        stdin: `11
Add: 101,Data Structures,CS,350.0
Add: 102,Algorithms,CS,400.0
Add: 103,Operating Systems,CS,380.0
Add: 101,Duplicate DS,CS,200.0
Update: 101,4.0
Update: 101,5.0
Update: 103,3.0
Update: 999,5.0
Get: cs
Average
WeightedAverage: CS,1`,
        expectedOutput: `Course Added Successfully
Course Added Successfully
Course Added Successfully
Course Already Exists
Course updated successfully
Course updated successfully
Course updated successfully
Id not found for the course
Course [ID: 101, Title: Data Structures, Department: CS, Fee: 350.0]
Course [ID: 102, Title: Algorithms, Department: CS, Fee: 400.0]
Course [ID: 103, Title: Operating Systems, Department: CS, Fee: 380.0]
4.0
Data Structures`
      },
      {
        id: 2,
        name: "Case 2",
        isPrivate: true,
        stdin: `7
Add: 201,Digital Circuits,EE,300.0
Add: 202,Power Systems,EE,350.0
Add: 203,Signals,EE,320.0
Update: 201,4.5
Update: 201,3.5
Update: 202,5.0
WeightedAverage: EE,1`,
        expectedOutput: `Course Added Successfully
Course Added Successfully
Course Added Successfully
Course updated successfully
Course updated successfully
Course updated successfully
Power Systems`
      },
      {
        id: 3,
        name: "Case 3",
        isPrivate: true,
        stdin: `5
Add: 301,Linear Algebra,Math,250.0
Add: 302,Calculus,Math,280.0
Update: 301,3.0
Update: 301,4.0
Average`,
        expectedOutput: `Course Added Successfully
Course Added Successfully
Course updated successfully
Course updated successfully
3.5`
      },
      {
        id: 4,
        name: "Case 4",
        isPrivate: true,
        stdin: `6
Add: 401,Machine Learning,AI,500.0
Add: 401,Deep Learning,AI,600.0
Get: physics
Update: 999,4.0
Average
WeightedAverage: AI,2`,
        expectedOutput: `Course Added Successfully
Course Already Exists
No Course Found
Id not found for the course
No Course Found
No Course Found`
      },
      {
        id: 5,
        name: "Case 5",
        isPrivate: true,
        stdin: `0`,
        expectedOutput: `No Operation Performed`
      }
    ]
  },
  {
    id: 11,
    name: "Custom / Blank",
    description: "", // Dynamically updated per language
    code: "",
    stdin: "",
    expectedOutput: "",
    testCases: [
      {
        id: 1,
        name: "Custom",
        isPrivate: false,
        stdin: "",
        expectedOutput: ""
      }
    ]
  }
];

// ---- Endpoints ----
const ENDPOINTS = {
  local: 'http://localhost:3000/execute',
  cloud: 'https://oops-compiler.onrender.com/execute'
};

// ---- Cloud Server Wake-up Ping (One-time on page load) ----
let hasPingedCloud = false;

function pingCloudServerOnce() {
  if (hasPingedCloud) return;
  hasPingedCloud = true;

  fetch('https://oops-compiler.onrender.com/health', { method: 'GET', mode: 'no-cors' })
    .catch(() => {
      fetch('https://oops-compiler.onrender.com/', { method: 'GET', mode: 'no-cors' }).catch(() => { });
    });
}
pingCloudServerOnce();

// ---- State Management ----
const STORAGE_PREFIX = "oops_compiler_";

let currentQuestionId = 1;
let currentLanguage = "java"; // "java" | "python"

// Restore saved settings
try {
  const savedLang = localStorage.getItem(`${STORAGE_PREFIX}last_language`);
  if (savedLang === "java" || savedLang === "python") {
    currentLanguage = savedLang;
  }
  const savedQ = parseInt(localStorage.getItem(`${STORAGE_PREFIX}last_question_id`), 10);
  if (QUESTIONS.some(q => q.id === savedQ)) {
    currentQuestionId = savedQ;
  }
} catch (e) { }

let currentFontSize = 15;
try {
  const storedSize = parseInt(localStorage.getItem(`${STORAGE_PREFIX}font_size`), 10);
  if (storedSize >= 10 && storedSize <= 36) {
    currentFontSize = storedSize;
  }
} catch (e) { }

// Editor instance & timers
let monacoEditor = null;
let isSettingValue = false;
let saveTimeout = null;

// ---- DOM Elements ----
const envSelector = document.getElementById("env-selector");
const templateListEl = document.getElementById("template-list");
const questionDisplayEl = document.getElementById("question-display");

const editorSection = document.getElementById("editor-section");
const ioSection = document.getElementById("io-section");
const gutterV = document.getElementById("gutter-v");
const gutterH = document.getElementById("gutter-h");
const sidebar = document.getElementById("sidebar");

const outputDisplay = document.getElementById("output-display");
const expectedOutputDisplay = document.getElementById("expected-output-display");
const matchBadge = document.getElementById("match-badge");
const outputMeta = document.getElementById("output-meta");

// Test Cases Elements & State
const testCasesTabsEl = document.getElementById("test-cases-tabs");
const testCasesSummaryEl = document.getElementById("test-cases-summary");
const btnToggleHiddenIo = document.getElementById("btn-toggle-hidden-io");
const activeTestCaseLabel = document.getElementById("active-testcase-label");

let showHiddenTestCases = false;
let activeTestCaseIndex = 0;
let lastRunResults = []; // results per test case for current question

const btnRun = document.getElementById("btn-run");
const btnRunText = document.getElementById("btn-run-text");
const btnReset = document.getElementById("btn-reset");
const btnFormat = document.getElementById("btn-format");
const btnClearOutput = document.getElementById("btn-clear-output");
const btnCloseOutput = document.getElementById("btn-close-output");

const statusIndicator = document.getElementById("status-indicator");
const statusText = statusIndicator.querySelector(".status-text");
const execInfo = document.getElementById("exec-info");
const fileBadge = document.getElementById("file-badge");

const saveDot = document.getElementById("save-dot");
const saveText = document.getElementById("save-text");

const btnFontDec = document.getElementById("btn-font-dec");
const btnFontInc = document.getElementById("btn-font-inc");
const fontSizeDisplay = document.getElementById("font-size-display");
const footerLangMode = document.getElementById("footer-lang-mode");

const btnLangJava = document.getElementById("btn-lang-java");
const btnLangPython = document.getElementById("btn-lang-python");

// ---- LocalStorage Helpers ----
function getSavedCode(qId, lang) {
  try {
    const key = `${STORAGE_PREFIX}code_${lang}_${qId}`;
    const val = localStorage.getItem(key);
    if (val !== null) return val;

    // Backward compatibility: If Java requested and old single-language code exists, migrate it
    if (lang === "java") {
      const oldVal = localStorage.getItem(`${STORAGE_PREFIX}code_${qId}`);
      if (oldVal !== null) {
        localStorage.setItem(key, oldVal);
        return oldVal;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

function saveCode(qId, lang, code) {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}code_${lang}_${qId}`, code);
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
}

function clearSavedQuestion(qId, lang) {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}code_${lang}_${qId}`);
    if (lang === "java") {
      localStorage.removeItem(`${STORAGE_PREFIX}code_${qId}`);
    }
  } catch (e) {
    console.warn("LocalStorage clear error:", e);
  }
}

function updateSaveStatus(status) {
  if (!saveDot || !saveText) return;
  if (status === "saving") {
    saveDot.style.backgroundColor = "#f59e0b";
    saveText.textContent = "Saving...";
    saveText.style.color = "#f59e0b";
  } else {
    saveDot.style.backgroundColor = "#10b981";
    saveText.textContent = "Saved";
    saveText.style.color = "#888";
  }
}

// ---- Font Size Control ----
function setFontSize(newSize) {
  currentFontSize = Math.min(36, Math.max(10, newSize));
  try {
    localStorage.setItem(`${STORAGE_PREFIX}font_size`, currentFontSize);
  } catch (e) { }

  if (monacoEditor) monacoEditor.updateOptions({ fontSize: currentFontSize });
  if (fontSizeDisplay) fontSizeDisplay.textContent = `${currentFontSize}px`;
}

// ---- Dynamic Question Description Generator ----
function getQuestionDescription(q) {
  if (q.name === "Custom / Blank" || q.id === 11) {
    if (currentLanguage === "python") {
      return `<h3>Custom Python OOP Program</h3>
<p>Write your own Python Object-Oriented Program from scratch!</p>
<ul>
  <li>Define classes, <code>__init__</code> constructors, methods, and functions in <code>main.py</code></li>
  <li>Output and Expected Output will appear below once you click <strong>Run</strong></li>
</ul>`;
    } else {
      return `<h3>Custom Java Program</h3>
<p>Write your own Java OOP program from scratch!</p>
<p>Use the editor to write any Java class, then compile and run it.</p>
<ul>
  <li>The main class <strong>must</strong> be named <code>Main</code></li>
  <li>Output and Expected Output will appear below once you click <strong>Run</strong></li>
</ul>`;
    }
  }
  return q.description;
}

// ---- Hidden Test Cases & Tabs Handlers ----
function toggleHiddenTestCases() {
  showHiddenTestCases = !showHiddenTestCases;
  updateHiddenToggleButtons();
  updateSidebarHiddenSection();
  if (ioSection && ioSection.style.display !== "none") {
    displayTestCase(activeTestCaseIndex);
  }
}

function updateHiddenToggleButtons() {
  const ioBtn = document.getElementById("btn-toggle-hidden-io");
  if (ioBtn) {
    ioBtn.classList.toggle("active", showHiddenTestCases);
    const eyeIcon = ioBtn.querySelector(".eye-icon");
    const btnText = ioBtn.querySelector(".btn-text");
    if (eyeIcon) eyeIcon.textContent = showHiddenTestCases ? "🙈" : "👁️";
    if (btnText) btnText.textContent = showHiddenTestCases ? "Hide Hidden Test Cases" : "Show Hidden Test Cases";
  }

  const sideBtn = document.getElementById("btn-toggle-hidden-side");
  if (sideBtn) {
    sideBtn.classList.toggle("active", showHiddenTestCases);
    const eyeIcon = sideBtn.querySelector(".eye-icon");
    const btnText = sideBtn.querySelector(".btn-text");
    if (eyeIcon) eyeIcon.textContent = showHiddenTestCases ? "🙈" : "👁️";
    if (btnText) btnText.textContent = showHiddenTestCases ? "Hide Hidden Test Cases" : "Show Hidden Test Cases";
  }
}

function updateSidebarHiddenSection() {
  const sideBody = document.getElementById("private-testcases-content");
  if (sideBody) {
    sideBody.style.display = showHiddenTestCases ? "flex" : "none";
  }
}

function renderSidebarHiddenCases(q) {
  if (!q || !q.testCases) return;
  const privateCases = q.testCases.filter(c => c.isPrivate);
  if (privateCases.length === 0) return;

  const cardHtml = `
    <div class="private-testcases-box">
      <div class="private-testcases-header">
        <div class="private-title">
          <span class="private-badge">🔒 ${privateCases.length} Private Test Cases</span>
          <span class="private-sub">Hidden verification cases</span>
        </div>
        <button class="btn btn-small btn-toggle-hidden ${showHiddenTestCases ? 'active' : ''}" id="btn-toggle-hidden-side" title="Show or hide private test cases">
          <span class="eye-icon">${showHiddenTestCases ? "🙈" : "👁️"}</span>
          <span class="btn-text">${showHiddenTestCases ? "Hide Hidden Test Cases" : "Show Hidden Test Cases"}</span>
        </button>
      </div>
      <div class="private-testcases-content" id="private-testcases-content" style="display: ${showHiddenTestCases ? 'flex' : 'none'};">
        ${privateCases.map((c) => `
          <div class="private-testcase-card">
            <div class="private-card-title">
              <span>🔒 ${escapeHtml(c.name)}</span>
              <span style="font-size: 10.5px; color: #a855f7; font-weight: 500;">Private Test Case</span>
            </div>
            <div class="sample-label">Input</div>
            <div class="sample-block">${escapeHtml(c.stdin)}</div>
            <div class="sample-label">Expected Output</div>
            <div class="sample-block">${escapeHtml(c.expectedOutput)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  questionDisplayEl.insertAdjacentHTML("beforeend", cardHtml);

  const sideBtn = document.getElementById("btn-toggle-hidden-side");
  if (sideBtn) {
    sideBtn.addEventListener("click", toggleHiddenTestCases);
  }
}

function renderTestCasesTabs() {
  const q = QUESTIONS.find(q => q.id === currentQuestionId);
  const cases = (q && q.testCases && q.testCases.length) ? q.testCases : [
    { id: 1, name: "Case 1", isPrivate: false, stdin: q ? q.stdin : "", expectedOutput: q ? q.expectedOutput : "" }
  ];

  if (!testCasesTabsEl) return;
  testCasesTabsEl.innerHTML = "";

  cases.forEach((c, idx) => {
    const tab = document.createElement("button");
    tab.className = `test-case-tab${idx === activeTestCaseIndex ? " active" : ""}`;
    tab.dataset.index = idx;

    let statusHtml = "";
    if (lastRunResults[idx]) {
      const res = lastRunResults[idx];
      if (res.passed) {
        statusHtml = `<span class="tab-status-icon passed">✓</span>`;
      } else {
        statusHtml = `<span class="tab-status-icon failed">✗</span>`;
      }
    }

    tab.innerHTML = `
      <span>${escapeHtml(c.name)}</span>
      ${c.isPrivate ? '<span class="tab-badge-private">🔒 Private</span>' : ''}
      ${statusHtml}
    `;

    tab.addEventListener("click", () => {
      displayTestCase(idx);
    });

    testCasesTabsEl.appendChild(tab);
  });

  if (testCasesSummaryEl) {
    if (lastRunResults.length > 0) {
      testCasesSummaryEl.style.display = "inline-flex";
      const passedCount = lastRunResults.filter(r => r && r.passed).length;
      const totalCount = lastRunResults.length;
      testCasesSummaryEl.textContent = `${passedCount}/${totalCount} Passed`;
      testCasesSummaryEl.className = `test-cases-summary ${passedCount === totalCount ? "all-passed" : "has-failed"}`;
    } else {
      testCasesSummaryEl.style.display = "none";
    }
  }
}

function displayTestCase(index) {
  activeTestCaseIndex = index;
  const q = QUESTIONS.find(q => q.id === currentQuestionId);
  const cases = (q && q.testCases && q.testCases.length) ? q.testCases : [
    { id: 1, name: "Case 1", isPrivate: false, stdin: q ? q.stdin : "", expectedOutput: q ? q.expectedOutput : "" }
  ];
  const c = cases[index] || cases[0];

  if (testCasesTabsEl) {
    testCasesTabsEl.querySelectorAll(".test-case-tab").forEach((tab, idx) => {
      tab.classList.toggle("active", idx === index);
    });
  }

  if (activeTestCaseLabel) {
    activeTestCaseLabel.textContent = `${c.name}${c.isPrivate ? " (Private)" : " (Sample)"}`;
  }

  const result = lastRunResults[index];

  // Expected output display
  if (c.isPrivate && !showHiddenTestCases) {
    expectedOutputDisplay.innerHTML = `
      <div class="hidden-case-lock-container">
        <div class="lock-icon">🔒</div>
        <div class="lock-title">Private / Hidden Test Case</div>
        <div class="lock-subtitle">This test case's input and expected output are currently hidden.</div>
        <button class="btn btn-reveal-inline" id="btn-reveal-inline">👁️ Show Hidden Test Case</button>
      </div>
    `;
    const revealBtn = document.getElementById("btn-reveal-inline");
    if (revealBtn) {
      revealBtn.addEventListener("click", toggleHiddenTestCases);
    }
  } else {
    expectedOutputDisplay.textContent = c.expectedOutput || "None specified";
  }

  // Actual output display
  if (!result) {
    outputDisplay.innerHTML = `<span class="output-placeholder">Run code to see results for ${escapeHtml(c.name)}...</span>`;
    matchBadge.className = "match-badge";
    matchBadge.textContent = "";
    outputMeta.textContent = "";
    return;
  }

  outputMeta.textContent = result.meta || "";

  if (result.compileError) {
    outputDisplay.innerHTML = `<span class="output-error">${escapeHtml(result.compileError)}</span>`;
    matchBadge.className = "match-badge mismatch";
    matchBadge.textContent = "✗ Compile Error";
    return;
  }

  if (result.runtimeError) {
    outputDisplay.innerHTML = `<span class="output-error">${escapeHtml(result.runtimeError)}</span>`;
    if (result.output) {
      outputDisplay.innerHTML += `\n${escapeHtml(result.output)}`;
    }
    matchBadge.className = "match-badge mismatch";
    matchBadge.textContent = "✗ Runtime Error";
    return;
  }

  const displayOutput = (result.output || "").replace(/\n$/, "");
  outputDisplay.innerHTML = `<span class="output-success">${escapeHtml(displayOutput)}</span>`;

  if (c.isPrivate && !showHiddenTestCases) {
    if (result.passed) {
      matchBadge.className = "match-badge match";
      matchBadge.textContent = "✓ Passed (Hidden)";
    } else {
      matchBadge.className = "match-badge mismatch";
      matchBadge.textContent = "✗ Failed (Hidden)";
    }
  } else {
    if (result.passed) {
      matchBadge.className = "match-badge match";
      matchBadge.textContent = "✓ Match";
    } else {
      matchBadge.className = "match-badge mismatch";
      matchBadge.textContent = "✗ Mismatch";
    }
  }
}

// ---- Question Loading ----
function loadQuestion(id) {
  const q = QUESTIONS.find(q => q.id === id);
  if (!q) return;

  currentQuestionId = id;
  try {
    localStorage.setItem(`${STORAGE_PREFIX}last_question_id`, id);
  } catch (e) { }

  // Update sidebar
  questionDisplayEl.innerHTML = getQuestionDescription(q);
  renderSidebarHiddenCases(q);

  // Update active item in sidebar list
  document.querySelectorAll(".template-item").forEach(el => {
    el.classList.toggle("active", parseInt(el.dataset.id, 10) === id);
  });

  // Reset test case selection and results
  activeTestCaseIndex = 0;
  lastRunResults = [];
  renderTestCasesTabs();

  // Load saved code for active language
  const saved = getSavedCode(id, currentLanguage);
  const codeToSet = saved !== null ? saved : (q.code || "");

  if (monacoEditor) {
    isSettingValue = true;
    monacoEditor.setValue(codeToSet);
    monacoEditor.setScrollTop(0);
    isSettingValue = false;
    updateSaveStatus("saved");
  }

  // Hide the execution output drawer on switching questions
  hideOutputDrawer();
}

// ---- Language Switcher (Java <-> Python) ----
function setLanguage(lang) {
  if (lang !== "java" && lang !== "python") return;

  // Save current language draft before switching
  if (monacoEditor && !isSettingValue) {
    saveCode(currentQuestionId, currentLanguage, monacoEditor.getValue());
  }

  currentLanguage = lang;
  try {
    localStorage.setItem(`${STORAGE_PREFIX}last_language`, lang);
  } catch (e) { }

  // Update Language toggle buttons
  btnLangJava.classList.toggle("active", lang === "java");
  btnLangJava.setAttribute("aria-selected", lang === "java");
  btnLangPython.classList.toggle("active", lang === "python");
  btnLangPython.setAttribute("aria-selected", lang === "python");

  // Update file badge
  if (lang === "java") {
    fileBadge.className = "badge-java";
    fileBadge.textContent = "☕ Main.java";
    btnRunText.textContent = "Run";
    footerLangMode.textContent = "Java 17 • Execution Server";
  } else {
    fileBadge.className = "badge-python";
    fileBadge.textContent = "🐍 main.py";
    btnRunText.textContent = "Run";
    footerLangMode.textContent = "Python 3 • Execution Server";
  }

  // Update Monaco language mode & load saved code
  if (monacoEditor) {
    const model = monacoEditor.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, lang);
    }
    const saved = getSavedCode(currentQuestionId, lang);
    const q = QUESTIONS.find(q => q.id === currentQuestionId);
    isSettingValue = true;
    monacoEditor.setValue(saved !== null ? saved : (q ? q.code : ""));
    isSettingValue = false;
    updateSaveStatus("saved");
  }

  // Update Custom question description if selected
  const customQ = QUESTIONS.find(q => q.name === "Custom / Blank");
  if (customQ && currentQuestionId === customQ.id) {
    questionDisplayEl.innerHTML = getQuestionDescription(customQ);
  }
}

// ---- Output Drawer Controls ----
function showOutputDrawer() {
  ioSection.style.display = "flex";
  gutterV.style.display = "block";
  if (monacoEditor) {
    setTimeout(() => monacoEditor.layout(), 10);
  }
}

function hideOutputDrawer() {
  ioSection.style.display = "none";
  gutterV.style.display = "none";
  matchBadge.className = "match-badge";
  matchBadge.textContent = "";
  if (monacoEditor) {
    setTimeout(() => monacoEditor.layout(), 10);
  }
}

// ---- Monaco Initialization ----
function initMonaco() {
  require.config({
    paths: {
      vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
    }
  });

  require(["vs/editor/editor.main"], function () {
    const q = QUESTIONS.find(q => q.id === currentQuestionId);
    const initialSaved = getSavedCode(currentQuestionId, currentLanguage);
    const initialCode = initialSaved !== null ? initialSaved : (q ? q.code : "");

    monacoEditor = monaco.editor.create(document.getElementById("monaco-editor"), {
      theme: "vs-dark",
      language: currentLanguage,
      value: initialCode,
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      fontSize: currentFontSize,
      lineHeight: 24,
      fontLigatures: true,
      mouseWheelZoom: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      padding: { top: 12, bottom: 12 },
      automaticLayout: true,
      suggestOnTriggerCharacters: true,
      wordWrap: "off",
      tabSize: 4,
      insertSpaces: true,
      renderWhitespace: "none",
      bracketPairColorization: { enabled: true },
      guides: { bracketPairs: true, indentation: true },
      smoothScrolling: true,
      cursorBlinking: "smooth",
      cursorSmoothCaretAnimation: "on",
      renderLineHighlight: "all",
      roundedSelection: true,
      contextmenu: true,
      folding: true,
      showFoldingControls: "mouseover",
      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      scrollbar: {
        verticalScrollbarSize: 6,
        horizontalScrollbarSize: 6,
        verticalSliderSize: 6
      }
    });

    // Keyboard Command: Ctrl+Enter inside editor runs code
    monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      runCode();
    });

    // Auto-save on editor input
    monacoEditor.onDidChangeModelContent(() => {
      if (isSettingValue) return;
      updateSaveStatus("saving");
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        saveCode(currentQuestionId, currentLanguage, monacoEditor.getValue());
        updateSaveStatus("saved");
      }, 300);
    });

    setLanguage(currentLanguage);
    loadQuestion(currentQuestionId);
  });
}

// ---- Sidebar Template List ----
function renderTemplateList() {
  templateListEl.innerHTML = "";
  QUESTIONS.forEach(q => {
    const item = document.createElement("div");
    item.className = `template-item${q.id === currentQuestionId ? " active" : ""}`;
    item.dataset.id = q.id;
    item.title = `${q.id}. ${q.name}`;
    const label = q.name === "Custom / Blank" ? "Custom" : `Q${q.id}`;
    item.innerHTML = `<span class="template-number">${label}</span>`;
    item.addEventListener("click", () => loadQuestion(q.id));
    templateListEl.appendChild(item);
  });
}

// ---- Execute Code via Local/Cloud Backend ----
async function executeCode(language, sourceCode, stdin) {
  const selectedEnv = envSelector ? (envSelector.value || "cloud") : "cloud";
  const url = ENDPOINTS[selectedEnv] || ENDPOINTS.cloud;

  const fileName = language === "python" ? "main.py" : "Main.java";
  const payload = {
    language: language,
    files: [{ name: fileName, content: sourceCode }],
    stdin: stdin || ""
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`Server Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    if (selectedEnv === "cloud") {
      throw new Error(`Failed to connect to Cloud Server. (${err.message}). Note: Render free tier takes ~30-60s to wake up on cold starts.`);
    } else {
      throw new Error(`Failed to connect to Local Server (http://localhost:3000). Ensure \`node Backend/server.js\` is running.`);
    }
  }
}

// ---- Run Code Engine (Executes Public & Private Test Cases) ----
let isRunning = false;

async function runCode() {
  if (isRunning || !monacoEditor) return;

  const code = monacoEditor.getValue();
  if (!code.trim()) {
    showOutputDrawer();
    outputDisplay.innerHTML = `<span class="output-placeholder">Code is empty. Write your ${currentLanguage === "python" ? "Python" : "Java"} code first!</span>`;
    return;
  }

  const q = QUESTIONS.find(q => q.id === currentQuestionId);
  const cases = (q && q.testCases && q.testCases.length) ? q.testCases : [
    { id: 1, name: "Case 1", isPrivate: false, stdin: (q ? q.stdin : ""), expectedOutput: (q ? q.expectedOutput : "") }
  ];

  showOutputDrawer();
  lastRunResults = [];
  renderTestCasesTabs();

  isRunning = true;
  const startTime = performance.now();
  const langLabel = currentLanguage === "python" ? "Python" : "Java";

  btnRun.classList.add("running");
  btnRun.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    <span>Running Test Cases...</span>
  `;

  setStatus("running", `Testing ${cases.length} cases...`);
  outputDisplay.innerHTML = `<span class="output-placeholder">Compiling and executing ${cases.length} test case${cases.length > 1 ? "s" : ""}...</span>`;
  matchBadge.className = "match-badge";
  matchBadge.textContent = "";
  outputMeta.textContent = "";

  try {
    // 1. Run first test case to test compilation
    const firstResult = await executeCode(currentLanguage, code, cases[0].stdin);
    const elapsedFirst = ((performance.now() - startTime) / 1000).toFixed(2);

    if (firstResult.compile && firstResult.compile.code !== 0) {
      let errorMsg = firstResult.compile.stderr || firstResult.compile.output || "Compilation error";
      if (currentLanguage === "python" && errorMsg.includes("Main.java")) {
        errorMsg = `⚠️ Cloud Server does not have Python installed yet.\nPlease redeploy the updated server to Render, or switch Server to "Local" (run \`node Backend/server.js\`) to execute Python code!`;
      }

      cases.forEach(() => {
        lastRunResults.push({
          compileError: errorMsg,
          passed: false,
          meta: `Compile Error (${elapsedFirst}s)`
        });
      });

      setStatus("error", `${langLabel} Error`);
      execInfo.textContent = `${langLabel} compile failed • ${elapsedFirst}s`;
      renderTestCasesTabs();
      displayTestCase(0);
      return;
    }

    const checkCaseResult = (c, res, elapsed) => {
      if (res.run) {
        const output = res.run.output || "";
        const stderr = res.run.stderr || "";
        if (res.run.code !== 0 && stderr) {
          return {
            runtimeError: stderr,
            output: output,
            passed: false,
            meta: `Exit Code: ${res.run.code} (${elapsed}s)`
          };
        } else {
          const displayOutput = output.replace(/\n$/, "");
          const actualNorm = displayOutput.trim().replace(/\r\n/g, "\n");
          const expectedNorm = (c.expectedOutput || "").trim().replace(/\r\n/g, "\n");
          const passed = expectedNorm ? (actualNorm === expectedNorm) : true;
          return {
            output: displayOutput,
            passed: passed,
            meta: `${elapsed}s`
          };
        }
      }
      return {
        runtimeError: "No response from execution engine",
        passed: false,
        meta: "Error"
      };
    };

    lastRunResults[0] = checkCaseResult(cases[0], firstResult, elapsedFirst);

    // 2. Run remaining cases concurrently with Promise.all
    if (cases.length > 1) {
      const remainingPromises = cases.slice(1).map(async (c) => {
        const caseStart = performance.now();
        const res = await executeCode(currentLanguage, code, c.stdin);
        const elapsedCase = ((performance.now() - caseStart) / 1000).toFixed(2);
        return checkCaseResult(c, res, elapsedCase);
      });

      const remainingResults = await Promise.all(remainingPromises);
      remainingResults.forEach((r, i) => {
        lastRunResults[i + 1] = r;
      });
    }

    const totalElapsed = ((performance.now() - startTime) / 1000).toFixed(2);
    const passedCount = lastRunResults.filter(r => r && r.passed).length;
    const totalCount = lastRunResults.length;

    renderTestCasesTabs();

    if (passedCount === totalCount) {
      setStatus("ready", `All ${totalCount} Passed`);
      execInfo.textContent = `All ${totalCount} test cases passed in ${totalElapsed}s`;
    } else {
      setStatus("error", `${passedCount}/${totalCount} Passed`);
      execInfo.textContent = `${passedCount}/${totalCount} passed (${totalCount - passedCount} failed) • ${totalElapsed}s`;
    }

    // Auto-select first failing test case, or Case 1 if all passed
    const firstFailIndex = lastRunResults.findIndex(r => r && !r.passed);
    displayTestCase(firstFailIndex !== -1 ? firstFailIndex : 0);

  } catch (err) {
    outputDisplay.innerHTML = `<span class="output-error">Error: ${escapeHtml(err.message)}</span>`;
    setStatus("error", "Error");
    execInfo.textContent = "";
  } finally {
    isRunning = false;
    btnRun.classList.remove("running");
    btnRun.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      <span id="btn-run-text">Run</span>
    `;
  }
}

function clearOutput() {
  lastRunResults = [];
  renderTestCasesTabs();
  outputDisplay.innerHTML = '<span class="output-placeholder">Output cleared. Run code again to see results.</span>';
  matchBadge.className = "match-badge";
  matchBadge.textContent = "";
  outputMeta.textContent = "";
  displayTestCase(activeTestCaseIndex);
}

function setStatus(state, text) {
  statusIndicator.className = `status-indicator${state === "running" ? " running" : state === "error" ? " error" : state === "ready" ? " ready" : ""}`;
  statusText.textContent = text;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---- Reset Code ----
function handleReset() {
  const langLabel = currentLanguage === "python" ? "Python" : "Java";
  const hasSaved = getSavedCode(currentQuestionId, currentLanguage) !== null;

  if (hasSaved) {
    const confirmed = confirm(`Are you sure you want to reset your saved ${langLabel} code for this question?`);
    if (!confirmed) return;
    clearSavedQuestion(currentQuestionId, currentLanguage);
  }

  if (monacoEditor) {
    isSettingValue = true;
    monacoEditor.setValue("");
    isSettingValue = false;
    updateSaveStatus("saved");
  }
}

// ---- Format Code ----
function handleFormat() {
  if (monacoEditor) {
    monacoEditor.getAction("editor.action.formatDocument")?.run();
  }
}

// ---- Event Listeners ----
btnRun.addEventListener("click", () => runCode());
btnReset.addEventListener("click", handleReset);
btnFormat.addEventListener("click", handleFormat);
btnClearOutput.addEventListener("click", clearOutput);
btnCloseOutput.addEventListener("click", hideOutputDrawer);
if (btnToggleHiddenIo) {
  btnToggleHiddenIo.addEventListener("click", toggleHiddenTestCases);
}

// Language Toggle Buttons (Side-by-Side: Java | Python)
btnLangJava.addEventListener("click", () => setLanguage("java"));
btnLangPython.addEventListener("click", () => setLanguage("python"));

// Font size buttons
if (btnFontInc) btnFontInc.addEventListener("click", () => setFontSize(currentFontSize + 1));
if (btnFontDec) btnFontDec.addEventListener("click", () => setFontSize(currentFontSize - 1));
if (fontSizeDisplay) fontSizeDisplay.textContent = `${currentFontSize}px`;

// Environment selector toggle
const envBtns = document.querySelectorAll(".env-toggle-btn");
if (envSelector) {
  envSelector.value = "cloud"; // default
  envBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      envBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      envSelector.value = btn.dataset.value;
    });
  });
}

// Save before reload or tab close
window.addEventListener("beforeunload", () => {
  if (monacoEditor && !isSettingValue) {
    saveCode(currentQuestionId, currentLanguage, monacoEditor.getValue());
  }
});

// Window resize layout
window.addEventListener("resize", () => {
  if (monacoEditor) monacoEditor.layout();
});

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl + Enter: Run code
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    runCode();
  }
  // Escape: Close output drawer
  else if (e.key === "Escape" && ioSection.style.display !== "none") {
    e.preventDefault();
    hideOutputDrawer();
  }
  // Alt + J: Switch to Java
  else if (e.altKey && (e.key === "j" || e.key === "J")) {
    e.preventDefault();
    setLanguage("java");
  }
  // Alt + P: Switch to Python
  else if (e.altKey && (e.key === "p" || e.key === "P")) {
    e.preventDefault();
    setLanguage("python");
  }
  // Ctrl + Plus / Equal: Font +
  else if ((e.ctrlKey || e.metaKey) && (e.key === "=" || e.key === "+")) {
    e.preventDefault();
    setFontSize(currentFontSize + 1);
  }
  // Ctrl + Minus: Font -
  else if ((e.ctrlKey || e.metaKey) && (e.key === "-" || e.key === "_")) {
    e.preventDefault();
    setFontSize(currentFontSize - 1);
  }
  // Ctrl + 0: Default font size
  else if ((e.ctrlKey || e.metaKey) && e.key === "0") {
    e.preventDefault();
    setFontSize(15);
  }
});

// ---- Resizing Gutters ----
let isResizingH = false;
let isResizingV = false;

// Horizontal Sidebar Resizer
gutterH.addEventListener("mousedown", () => {
  isResizingH = true;
  document.body.style.cursor = "col-resize";
  gutterH.classList.add("active");
});

// Vertical IO Resizer
gutterV.addEventListener("mousedown", () => {
  isResizingV = true;
  document.body.style.cursor = "row-resize";
  gutterV.classList.add("active");
});

document.addEventListener("mousemove", (e) => {
  if (isResizingH) {
    const totalWidth = document.getElementById("app-main").clientWidth;
    const newWidth = (e.clientX / totalWidth) * 100;
    if (newWidth > 15 && newWidth < 80) {
      sidebar.style.width = `${newWidth}%`;
    }
  } else if (isResizingV) {
    const container = document.getElementById("right-pane");
    const containerRect = container.getBoundingClientRect();
    const newHeight = containerRect.bottom - e.clientY;
    const totalHeight = containerRect.height;
    const heightPercent = (newHeight / totalHeight) * 100;
    if (heightPercent > 10 && heightPercent < 80) {
      ioSection.style.height = `${heightPercent}%`;
    }
  }
});

document.addEventListener("mouseup", () => {
  if (isResizingH || isResizingV) {
    isResizingH = false;
    isResizingV = false;
    document.body.style.cursor = "default";
    gutterH.classList.remove("active");
    gutterV.classList.remove("active");

    if (monacoEditor) monacoEditor.layout();
  }
});

// ---- Initialize Application ----
renderTemplateList();
loadQuestion(currentQuestionId);
initMonaco();
