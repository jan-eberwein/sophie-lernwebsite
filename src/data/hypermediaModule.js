// AUTO-GENERATED from src/data/Hypermedia/*.pdf (12 lectures, markitdown -> md), translated to English.
// 334 questions across types: {"mc":108,"categorize":38,"order":25,"fill-blank":52,"code-find-bug":33,"open":38,"self-assess":40}
// Do not hand-edit; regenerate via the question pipeline.

export const hypermediaModule = {
  "title": "Hypermedia Frameworks",
  "lang": "en",
  "data": [
    {
      "type": "mc",
      "title": "Ruby Instance Variable",
      "context": null,
      "question": "How is an instance variable marked in Ruby?",
      "options": [
        {
          "text": "It starts with a single @ (e.g. @name)",
          "isCorrect": true
        },
        {
          "text": "It starts with @@ (e.g. @@name)",
          "isCorrect": false
        },
        {
          "text": "It starts with $ (e.g. $name)",
          "isCorrect": false
        },
        {
          "text": "It starts with : (e.g. :name)",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, instance variables start with @, class variables with @@, global variables with $, and local variables with a letter or _."
    },
    {
      "type": "mc",
      "title": "Ruby & Rails History",
      "context": null,
      "question": "Which statements about the origins of Ruby and Rails are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "Ruby was developed in 1994 by Yukihiro Matsumoto",
          "isCorrect": true
        },
        {
          "text": "Rails was developed in 2003 by David Heinemeier-Hansson (DHH)",
          "isCorrect": true
        },
        {
          "text": "Rails is an MVC-based web framework",
          "isCorrect": true
        },
        {
          "text": "Ruby was developed by DHH in 2003",
          "isCorrect": false
        },
        {
          "text": "The name Ruby is a hint at the language Python",
          "isCorrect": false
        }
      ],
      "explanation": "Ruby was created in 1994 by Yukihiro Matsumoto, and Rails in 2003 by David Heinemeier-Hansson (DHH). Rails is an MVC-based web framework. According to the slide, the name Ruby is a hint at the language Perl (not Python)."
    },
    {
      "type": "mc",
      "title": "Boolean Methods",
      "context": null,
      "question": "By convention, how can you recognize a method in Ruby that returns a Boolean value?",
      "options": [
        {
          "text": "The method name ends with a question mark (?)",
          "isCorrect": true
        },
        {
          "text": "The method name ends with an exclamation mark (!)",
          "isCorrect": false
        },
        {
          "text": "The method name starts with is_",
          "isCorrect": false
        },
        {
          "text": "The method name is entirely uppercase",
          "isCorrect": false
        }
      ],
      "explanation": "By convention, methods that return a Boolean value end with a question mark, e.g. \"\".empty? => true."
    },
    {
      "type": "mc",
      "title": "Rails Principles",
      "context": null,
      "question": "Which two core principles do the slides attribute to Rails? (Multiple answers possible)",
      "options": [
        {
          "text": "Convention Over Configuration",
          "isCorrect": true
        },
        {
          "text": "Don't Repeat Yourself (DRY)",
          "isCorrect": true
        },
        {
          "text": "Configuration Over Convention",
          "isCorrect": false
        },
        {
          "text": "Write Everything Twice (WET)",
          "isCorrect": false
        }
      ],
      "explanation": "Rails relies on Convention Over Configuration and Don't Repeat Yourself (DRY). Both aim at \"Less Software\"."
    },
    {
      "type": "mc",
      "title": "String Interpolation",
      "context": "test = \"Hello\"\nputs \"This is a #{test}\"",
      "question": "In which case is interpolation with #{...} as well as \\n evaluated (substituted) in a Ruby string?",
      "options": [
        {
          "text": "Only with double quotes \" \"",
          "isCorrect": true
        },
        {
          "text": "Only with single quotes ' '",
          "isCorrect": false
        },
        {
          "text": "With both variants equally",
          "isCorrect": false
        },
        {
          "text": "With neither variant",
          "isCorrect": false
        }
      ],
      "explanation": "Only double quotes perform the substitution of #{} and escape sequences like \\n. Single quotes do not (cf. PHP)."
    },
    {
      "type": "mc",
      "title": "View Escaping",
      "context": null,
      "question": "By default, what happens to characters such as <, > and & when they are output in an .html.erb view?",
      "options": [
        {
          "text": "They are automatically escaped by Rails",
          "isCorrect": true
        },
        {
          "text": "They are output unchanged (raw)",
          "isCorrect": false
        },
        {
          "text": "They cause a runtime error",
          "isCorrect": false
        },
        {
          "text": "They are automatically removed",
          "isCorrect": false
        }
      ],
      "explanation": "Rails automatically escapes <, >, & etc. (formerly the function \"h\"). For unescaped output you must explicitly use .html_safe (<%= str.html_safe %>)."
    },
    {
      "type": "categorize",
      "title": "ERB Tags",
      "context": null,
      "question": "Match the ERB constructs to their function: run code without output, or output a result.",
      "items": [
        {
          "text": "<% @entries.each do |entry| %>",
          "category": "Run code (no output)"
        },
        {
          "text": "<% end %>",
          "category": "Run code (no output)"
        },
        {
          "text": "<% content_for :title, \"My Title\" %>",
          "category": "Run code (no output)"
        },
        {
          "text": "<%= entry %>",
          "category": "Output a result"
        },
        {
          "text": "<%= str.html_safe %>",
          "category": "Output a result"
        },
        {
          "text": "<%= yield %>",
          "category": "Output a result"
        }
      ],
      "categories": [
        "Run code (no output)",
        "Output a result"
      ],
      "explanation": "<% %> runs Ruby code without output (e.g. loops, content_for), whereas <%= %> outputs the result of an expression (also <%= yield %> and <%= str.html_safe %>)."
    },
    {
      "type": "categorize",
      "title": "Equality Methods",
      "context": null,
      "question": "Match the Ruby equality methods (and examples) to the property each one checks.",
      "items": [
        {
          "text": "equal?",
          "category": "Same object id"
        },
        {
          "text": "1.equal? 1 => true",
          "category": "Same object id"
        },
        {
          "text": "==",
          "category": "Same value"
        },
        {
          "text": "1 == 1.0 => true",
          "category": "Same value"
        },
        {
          "text": "eql?",
          "category": "Same value and type"
        },
        {
          "text": "1.eql? 1.0 => false",
          "category": "Same value and type"
        }
      ],
      "categories": [
        "Same object id",
        "Same value",
        "Same value and type"
      ],
      "explanation": "equal? checks the object id, == checks for the same value, eql? checks value AND type. Therefore 1 == 1.0 => true, but 1.eql? 1.0 => false."
    },
    {
      "type": "order",
      "title": "Rails CRUD Setup",
      "context": "Goal: create a CRUD application \"demo\" with an employee scaffold and start the server.",
      "question": "Put the console commands in the correct order to create and start a simple CRUD application with a DB backend.",
      "items": [
        "rails new demo",
        "cd demo",
        "rails generate scaffold employee firstname:string lastname:string birthday:date",
        "rails db:migrate",
        "rails server"
      ],
      "explanation": "First the application is created (rails new demo), then you change into the directory, next the scaffold is generated, the migration is run, and finally the server is started."
    },
    {
      "type": "order",
      "title": "Exposing a Custom Action",
      "context": "http://localhost:3000/blogs/hello should work.",
      "question": "Put the steps in the correct order to make a custom controller action hello reachable via a URL.",
      "items": [
        "rails generate controller Blogs index",
        "Add the action hello in app/controllers/blogs_controller.rb",
        "Add the line get 'blogs/hello' in config/routes.rb",
        "Start rails server",
        "Open the URL http://localhost:3000/blogs/hello in the browser"
      ],
      "explanation": "First the controller is generated, then the action is added manually, after that the route is added in config/routes.rb, the server is started, and finally the URL is called."
    },
    {
      "type": "fill-blank",
      "title": "initialize Constructor",
      "context": "The class Product should be initialized with name and price.",
      "question": "Complete the Ruby class: the name of the constructor method and the sigil for instance variables.",
      "template": "class Product\n   def {{0}}(name, price)\n      {{1}}name = name\n      {{1}}price = price\n   end\nend",
      "blanks": [
        {
          "accept": [
            "initialize"
          ]
        },
        {
          "accept": [
            "@"
          ]
        }
      ],
      "explanation": "In Ruby the constructor is called initialize. Instance variables start with @, so @name = name and @price = price."
    },
    {
      "type": "fill-blank",
      "title": "attr_accessor",
      "context": "Both read and write access should be enabled.",
      "question": "Complete the class so that getters and setters for name and price are generated automatically, and add the prefix of the symbols.",
      "template": "class Product\n  {{0}} {{1}}name, {{1}}price\nend",
      "blanks": [
        {
          "accept": [
            "attr_accessor"
          ]
        },
        {
          "accept": [
            ":"
          ]
        }
      ],
      "explanation": "attr_accessor generates both getters and setters. Symbols start with a colon, so :name, :price."
    },
    {
      "type": "fill-blank",
      "title": "View Loop in ERB",
      "context": "@entries should be output as a list.",
      "question": "Complete the ERB view: the tag for code without output and the tag for outputting an expression.",
      "template": "<ul>\n{{0}} @entries.each do |entry| %>\n<li>{{1}} entry %></li>\n<% end %>\n</ul>",
      "blanks": [
        {
          "accept": [
            "<%"
          ]
        },
        {
          "accept": [
            "<%="
          ]
        }
      ],
      "explanation": "<% %> runs code without output (the loop), <%= %> outputs the result of an expression (entry)."
    },
    {
      "type": "code-find-bug",
      "title": "Class Method",
      "context": null,
      "question": "In this Ruby class, info should be a class method. Click on the faulty line.",
      "language": "ruby",
      "codeLines": [
        "class Product",
        "    def info",
        "       \"This is the Product class\"",
        "    end",
        "end",
        "",
        "puts Product.info"
      ],
      "buggyLines": [
        1
      ],
      "fix": "The method must be defined as def self.info so that it is a class method.",
      "explanation": "Class methods must be defined with self. (def self.info). Without self., info would be an instance method and the call Product.info would fail."
    },
    {
      "type": "code-find-bug",
      "title": "Inheritance Syntax",
      "context": null,
      "question": "The class Book should inherit from Product. Click on the faulty line.",
      "language": "ruby",
      "codeLines": [
        "class Book : Product",
        "  attr_accessor :isbn",
        "end"
      ],
      "buggyLines": [
        0
      ],
      "fix": "Inheritance is written with <: class Book < Product.",
      "explanation": "In Ruby, inheritance is expressed with the character <: class Book < Product. A colon (:) is wrong here."
    },
    {
      "type": "code-find-bug",
      "title": "Defining a Route",
      "context": "The URL http://localhost:3000/blogs/hello should work.",
      "question": "In config/routes.rb, a route for the hello action of the Blogs controller should be added. Click on the faulty line.",
      "language": "ruby",
      "codeLines": [
        "Rails.application.routes.draw do",
        "  GET 'blogs/hello'",
        "end"
      ],
      "buggyLines": [
        1
      ],
      "fix": "The verb must be lowercase: get 'blogs/hello'.",
      "explanation": "According to the slide, the route is get 'blogs/hello'. The HTTP verb must be lowercase (get) and the path given as a string."
    },
    {
      "type": "code-find-bug",
      "title": "Counting Iterator",
      "context": null,
      "question": "This code is meant to print the numbers 0 to 4 using a \"Counting Iterator\". Click on the faulty line.",
      "language": "ruby",
      "codeLines": [
        "5.times do (i)",
        "  puts i",
        "end"
      ],
      "buggyLines": [
        0
      ],
      "fix": "The block parameter must go between vertical bars: 5.times do |i|.",
      "explanation": "In Ruby the block parameter goes between vertical bars | |, not in parentheses. The correct form is therefore 5.times do |i|."
    },
    {
      "type": "open",
      "title": "Persistence Framework",
      "context": null,
      "question": "What is the name of the persistence framework (ORM) used in Rails for database access?",
      "accept": [
        "ActiveRecord",
        "Active Record"
      ],
      "sampleAnswer": "ActiveRecord (Active Record) is the ORM/persistence framework of Rails.",
      "explanation": "Rails uses ActiveRecord as its ORM/persistence framework, which also represents the Model in MVC."
    },
    {
      "type": "open",
      "title": "Show Routes",
      "context": null,
      "question": "Which console command displays all routes defined in a Rails application?",
      "accept": [
        "rails routes"
      ],
      "sampleAnswer": "rails routes shows all defined routes.",
      "explanation": "rails routes shows the defined routes; alternatively via http://localhost:3000/rails/info/routes."
    },
    {
      "type": "open",
      "title": "Default Layout",
      "context": null,
      "question": "What is the full path (relative to the project) of the default layout file in a Rails application?",
      "accept": [
        "views/layouts/application.html.erb",
        "app/views/layouts/application.html.erb",
        "application.html.erb"
      ],
      "sampleAnswer": "views/layouts/application.html.erb (the outermost template into which the views are embedded via yield).",
      "explanation": "The default layout is views/layouts/application.html.erb; the view content is embedded there via <%= yield %>."
    },
    {
      "type": "open",
      "title": "Install Gem",
      "context": null,
      "question": "What is the full command to install the rails package via Ruby package management?",
      "accept": [
        "gem install rails"
      ],
      "sampleAnswer": "gem install rails",
      "explanation": "The gem command line tool handles Ruby package management; gem install rails installs the package."
    },
    {
      "type": "mc",
      "title": "Rails Folder Structure",
      "context": null,
      "question": "According to the slide, which directories are located below app/? (Multiple answers possible)",
      "options": [
        {
          "text": "controllers/",
          "isCorrect": true
        },
        {
          "text": "models/",
          "isCorrect": true
        },
        {
          "text": "views/",
          "isCorrect": true
        },
        {
          "text": "config/ with routes.rb",
          "isCorrect": false
        },
        {
          "text": "db/migrate/",
          "isCorrect": false
        }
      ],
      "explanation": "Under app/ you find, among others, controllers/, helpers/, mailers/, models/ and views/. routes.rb and database.yml, on the other hand, are under config/, and the migrations are under db/migrate/."
    },
    {
      "type": "mc",
      "title": "Controller Convention",
      "context": "Example: rails generate controller Blogs index",
      "question": "According to the slide, which naming convention applies to the name of a controller created with the generator?",
      "options": [
        {
          "text": "The controller name is plural",
          "isCorrect": true
        },
        {
          "text": "The controller name is singular",
          "isCorrect": false
        },
        {
          "text": "The controller name is entirely uppercase",
          "isCorrect": false
        },
        {
          "text": "The controller name starts with an underscore",
          "isCorrect": false
        }
      ],
      "explanation": "The naming convention states that the controller name is plural (e.g. Blogs)."
    },
    {
      "type": "categorize",
      "title": "Ruby Naming Conventions",
      "context": null,
      "question": "Match each identifier to the correct Ruby naming convention.",
      "items": [
        {
          "text": "new_price",
          "category": "Variable/Method (snake_case)"
        },
        {
          "text": "say_hello_to",
          "category": "Variable/Method (snake_case)"
        },
        {
          "text": "CalcPrice",
          "category": "Class (CamelCase)"
        },
        {
          "text": "Product",
          "category": "Class (CamelCase)"
        },
        {
          "text": "EXAMPLE",
          "category": "Constant (UPPERCASE)"
        }
      ],
      "categories": [
        "Variable/Method (snake_case)",
        "Class (CamelCase)",
        "Constant (UPPERCASE)"
      ],
      "explanation": "Variables and methods use snake_case (lowercase first letter), classes use CamelCase (uppercase first letter), and constants are written entirely in uppercase."
    },
    {
      "type": "mc",
      "title": "Output Function",
      "context": null,
      "question": "According to the slide, which statements about the output functions in Ruby are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "puts adds a line feed",
          "isCorrect": true
        },
        {
          "text": "print does not output a line feed",
          "isCorrect": true
        },
        {
          "text": "puts and print are both output functions",
          "isCorrect": true
        },
        {
          "text": "print automatically adds a line feed",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, puts adds a line feed, whereas print does not output a line feed. Both serve for output."
    },
    {
      "type": "self-assess",
      "title": "MVC in Rails",
      "context": null,
      "question": "Explain the three components of the Model-View-Controller architecture in Rails and which technology/task lies behind each one.",
      "answer": "Rails is built according to Model-View-Controller (MVC): The Model handles the data and persistence layer and is realized by the \"ActiveRecord\" (Active Record) ORM. The Views are .html.erb files (\"embedded ruby\") and are responsible for the presentation; they can directly access all instance variables of the controller. The Controllers are classes with action methods that are mapped to URLs via \"routing\" and that process the requests and render the appropriate View.",
      "explanation": "The slide on Rails Application Architecture describes Model, View and Controller with their respective roles."
    },
    {
      "type": "self-assess",
      "title": "Symbols vs. Strings",
      "context": null,
      "question": "How do Symbols differ from Strings in Ruby, and what are Symbols typically used for?",
      "answer": "A Symbol is a special variant of a string (comparable to enums) and starts with a colon, e.g. :rent. Symbols are frequently used as the index/key for hashes, for example {:action => \"show\", :id => 4}, for which there is also the alternative syntax {action: \"show\", id: 4}. They are also often used as parameters, e.g. in link_to \"Detail\", action: \"show\", id: 4, where both the parentheses of the method call and the curly braces of the last hash parameter are optional.",
      "explanation": "Symbols are a special variant of strings (cp. enums) and are used, among other things, as hash indexes and for parameters."
    },
    {
      "type": "mc",
      "title": "Scaffold Generator",
      "context": "> rails generate scaffold Article title:string body:text",
      "question": "According to the slides, what does the command `rails generate scaffold Article title:string body:text` create? (Multiple answers possible)",
      "options": [
        {
          "text": "A model for Article",
          "isCorrect": true
        },
        {
          "text": "A RESTful controller with the HTTP methods get, post, put, delete",
          "isCorrect": true
        },
        {
          "text": "An already migrated database table without any further command",
          "isCorrect": false
        },
        {
          "text": "A view file _form.html.erb (partial)",
          "isCorrect": true
        },
        {
          "text": "A config/database.yml with PostgreSQL configuration",
          "isCorrect": false
        }
      ],
      "explanation": "The scaffold generator creates the model and a complete RESTful controller (with get, post, put, delete) along with views (including the partial _form.html.erb). The migration must then be run with `rails db:migrate`."
    },
    {
      "type": "order",
      "title": "RESTful Rails Setup",
      "context": null,
      "question": "Put the steps from the slides in the correct order to set up a new RESTful Rails project with an Article resource.",
      "items": [
        "rails new Articles",
        "cd Articles",
        "rails generate scaffold Article title:string body:text",
        "rails db:migrate"
      ],
      "explanation": "First the project is created, then you change into it, then it is scaffolded, and finally it is migrated (according to the 'Restful Rails' slide)."
    },
    {
      "type": "categorize",
      "title": "REST Actions & HTTP Verbs",
      "context": null,
      "question": "Match the seven RESTful controller actions to their HTTP method according to the 'RESTful Controller' table.",
      "items": [
        {
          "text": "index",
          "category": "GET"
        },
        {
          "text": "show",
          "category": "GET"
        },
        {
          "text": "new",
          "category": "GET"
        },
        {
          "text": "edit",
          "category": "GET"
        },
        {
          "text": "create",
          "category": "POST"
        },
        {
          "text": "update",
          "category": "PUT"
        },
        {
          "text": "destroy",
          "category": "DELETE"
        }
      ],
      "categories": [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      "explanation": "According to the slide: index/show/new/edit use GET, create uses POST, update uses PUT, destroy uses DELETE."
    },
    {
      "type": "mc",
      "title": "Named Route show",
      "context": null,
      "question": "According to the 'RESTful Controller' table, which URL and parameter belong to the `show` action?",
      "options": [
        {
          "text": "GET /articles/:id with parameter ID (article_path)",
          "isCorrect": true
        },
        {
          "text": "POST /articles with Record hash (articles_path)",
          "isCorrect": false
        },
        {
          "text": "GET /articles/new without parameter (new_article_path)",
          "isCorrect": false
        },
        {
          "text": "DELETE /articles/:id with parameter ID (article_path)",
          "isCorrect": false
        }
      ],
      "explanation": "The show action uses GET on article_path (/articles/:id) and receives the ID as a parameter."
    },
    {
      "type": "fill-blank",
      "title": "Strong Params",
      "context": "Protection against unwanted mass assignment in the controller.",
      "question": "Complete the whitelisting method from the 'Parameter Whitelisting' slide that only allows the fields title and body.",
      "template": "def article_params\n  params.{{0}}(:article).{{1}}(:title, :body)\nend",
      "blanks": [
        {
          "accept": [
            "require"
          ]
        },
        {
          "accept": [
            "permit"
          ]
        }
      ],
      "explanation": "params.require(:article).permit(:title, :body) only permits the allowed fields and prevents an attacker from setting additional properties."
    },
    {
      "type": "self-assess",
      "title": "Mass Assignment Risk",
      "context": null,
      "question": "Explain why parameter whitelisting (Strong Params) is necessary in Rails and which security problem it prevents.",
      "answer": "When submitting a form in Rails, a hash of values is sent to the controller ('Mass Assignment'). By manipulating the form or by creating a request by hand, a hacker might set properties that are not part of the form and were not intended by the programmer. As a counter measure, a helper function (e.g. params.require(:article).permit(:title, :body)) whitelists only the permitted fields, which are the ones allowed to be assigned when the form is submitted.",
      "explanation": "The answer should name Mass Assignment and the risk of manipulation through hand-crafted requests."
    },
    {
      "type": "code-find-bug",
      "title": "create Action",
      "context": null,
      "question": "This create action contains an error according to the slide 'Controller: create'. Click the faulty line.",
      "language": "ruby",
      "codeLines": [
        "def create",
        "  @article = Article.new(article_params)",
        "  respond_to do |format|",
        "    if @article.valid?",
        "      format.html { redirect_to(@article, notice: 'Article was successfully created.') }",
        "    else",
        "      format.html { render action: \"new\" }",
        "    end",
        "  end",
        "end"
      ],
      "buggyLines": [
        3
      ],
      "fix": "The condition must read `if @article.save` (save attempts to persist and returns true/false).",
      "explanation": "On success, Rails uses @article.save to check whether saving worked (true/false). The call @article.valid? only checks validity but does not save, and does not match the slide."
    },
    {
      "type": "mc",
      "title": ".save Return Value",
      "context": "respond_to do |format|\n  if @article.save\n    ...",
      "question": "What does `@article.save` return in the create action according to the slide, and what is it used for?",
      "options": [
        {
          "text": "true on successful save, false otherwise; in the else branch the form is rendered again",
          "isCorrect": true
        },
        {
          "text": "The saved object itself, which is then rendered",
          "isCorrect": false
        },
        {
          "text": "A list of validation errors",
          "isCorrect": false
        },
        {
          "text": "Always nil, which is why respond_to is needed",
          "isCorrect": false
        }
      ],
      "explanation": "save returns true (saving ok) or false; in the else branch, on false the form is rendered again (render action: \"new\")."
    },
    {
      "type": "fill-blank",
      "title": "Model Validation",
      "context": "Validation in the model class Entry, checked on save.",
      "question": "Complete the ActiveRecord validation that ensures the content field must be present.",
      "template": "{{0}} :content, {{1}}: true",
      "blanks": [
        {
          "accept": [
            "validates"
          ]
        },
        {
          "accept": [
            "presence"
          ]
        }
      ],
      "explanation": "validates :content, presence: true enforces the presence of content; it is checked on save."
    },
    {
      "type": "mc",
      "title": "respond_to Formats",
      "context": "respond_to do |format|\n  format.html { ... }\n  format.json { ... }\nend",
      "question": "What is the purpose of the `respond_to do |format|` block in the generated controller actions according to the slides?",
      "options": [
        {
          "text": "To respond differently to different request formats such as html and json",
          "isCorrect": true
        },
        {
          "text": "To open several database connections in parallel",
          "isCorrect": false
        },
        {
          "text": "To run validations before saving",
          "isCorrect": false
        },
        {
          "text": "To register routes in routes.rb",
          "isCorrect": false
        }
      ],
      "explanation": "respond_to lets you respond differently depending on the requested format, e.g. HTML (redirect/render) or JSON (e.g. via JBuilder)."
    },
    {
      "type": "code-find-bug",
      "title": "destroy Action",
      "context": null,
      "question": "This destroy action should redirect to the index list after deleting (slide 'Controller: destroy'). Click the faulty line.",
      "language": "ruby",
      "codeLines": [
        "def destroy",
        "  @article.destroy",
        "  respond_to do |format|",
        "    format.html { redirect_to @article }",
        "    format.json { head :no_content }",
        "  end",
        "end"
      ],
      "buggyLines": [
        3
      ],
      "fix": "It must read `redirect_to articles_url` (redirect to the index list, not to the deleted resource).",
      "explanation": "After deleting, the slide redirects to the list URL: redirect_to articles_url. A redirect to @article (the resource that was just deleted) is wrong."
    },
    {
      "type": "order",
      "title": "Rails Request Cycle",
      "context": "Example request: /articles/1",
      "question": "Put the stages of the Rails Request Cycle (slide 'Rails Request Cycle') in the correct order, from the browser request to the response.",
      "items": [
        "Browser",
        "Routing",
        "Controller (Action)",
        "Model",
        "View",
        "Response"
      ],
      "explanation": "The request travels from the browser through routing to the controller action, which uses the model, then renders the view and finally returns the response."
    },
    {
      "type": "open",
      "title": "before_action set_article",
      "context": "before_action :____, only: %i[show edit update destroy]",
      "question": "In the slide 'Controller: before action', what is the name of the private method called via before_action before show, edit, update and destroy to load the Article instance based on the id?",
      "accept": [
        "set_article",
        ":set_article"
      ],
      "sampleAnswer": "set_article",
      "explanation": "The method set_article loads @article = Article.find(params[:id]) and is called via before_action for several actions."
    },
    {
      "type": "fill-blank",
      "title": "before_action Syntax",
      "context": "Inside the ArticlesController.",
      "question": "Complete the before_action line so that set_article is only run for show, edit, update and destroy.",
      "template": "before_action :set_article, {{0}}: %i[show edit update destroy]",
      "blanks": [
        {
          "accept": [
            "only"
          ]
        }
      ],
      "explanation": "before_action :set_article, only: %i[show edit update destroy] restricts the filter to exactly these four actions."
    },
    {
      "type": "categorize",
      "title": "Database Commands",
      "context": null,
      "question": "Match the rails commands from the DB slides to their effect.",
      "items": [
        {
          "text": "rails db:create",
          "category": "Create or change DB structure/tables"
        },
        {
          "text": "rails db:migrate",
          "category": "Create or change DB structure/tables"
        },
        {
          "text": "rails db:seed",
          "category": "Initialize data"
        },
        {
          "text": "rails db:rollback",
          "category": "Undo a migration"
        }
      ],
      "categories": [
        "Create or change DB structure/tables",
        "Initialize data",
        "Undo a migration"
      ],
      "explanation": "db:create creates the database, db:migrate runs migrations (builds/changes the table structure), db:rollback undoes the last migration, db:seed fills the DB with initial data."
    },
    {
      "type": "mc",
      "title": "index Action",
      "context": "# GET /articles\ndef index\n  ...\nend",
      "question": "According to the slide 'Controller: index', which statement is in the body of the index action to load all articles?",
      "options": [
        {
          "text": "@articles = Article.all",
          "isCorrect": true
        },
        {
          "text": "@article = Article.find(params[:id])",
          "isCorrect": false
        },
        {
          "text": "@articles = Article.new",
          "isCorrect": false
        },
        {
          "text": "@articles = Article.where(params[:id])",
          "isCorrect": false
        }
      ],
      "explanation": "index loads all records with @articles = Article.all, which the view then iterates over."
    },
    {
      "type": "mc",
      "title": "new Action",
      "context": "def new\n  @article = Article.new\nend",
      "question": "What happens in the `new` action and its associated view according to the slide 'Controller: new'?",
      "options": [
        {
          "text": "@article = Article.new is created and the view includes the partial _form.html.erb via render 'form'",
          "isCorrect": true
        },
        {
          "text": "The object is saved immediately and redirected to the show page",
          "isCorrect": false
        },
        {
          "text": "All articles are loaded and displayed in a table",
          "isCorrect": false
        },
        {
          "text": "The destroy confirmation is rendered",
          "isCorrect": false
        }
      ],
      "explanation": "new creates a new, empty Article object; the view includes the partial _form.html.erb via `render 'form'`."
    },
    {
      "type": "fill-blank",
      "title": "Model Generator",
      "context": "From the slide 'Model Generator'.",
      "question": "Complete the command that uses the model generator to create a model Entry with a text field content.",
      "template": "rails generate {{0}} Entry content:{{1}}",
      "blanks": [
        {
          "accept": [
            "model"
          ]
        },
        {
          "accept": [
            "text"
          ]
        }
      ],
      "explanation": "rails generate model Entry content:text creates the model class, migration and test code; the type text is used for longer content."
    },
    {
      "type": "self-assess",
      "title": "Explaining Migrations",
      "context": null,
      "question": "What are 'Migrations' in Rails and which conventions apply to tables and fields according to the slide?",
      "answer": "Migrations describe the DB structure in Ruby code (written in a Ruby DSL, 'domain specific language'). Conventions according to the slide: there is one table per model, whose name is in the plural (e.g. entries). An id field as primary key is generated automatically. t.timestamps automatically creates the created_at and updated_at fields. The migration files live in the db/migrate folder and are executed with rails db:migrate.",
      "explanation": "The answer should name migrations as a Ruby DSL for describing the DB structure as well as the conventions (plural table name, automatic id, timestamps)."
    },
    {
      "type": "mc",
      "title": "Default Database",
      "context": "config/database.yml",
      "question": "Which database does Rails use by default according to the slide 'DB Configuration', and how do you choose a different one when creating a project?",
      "options": [
        {
          "text": "SQLite is the default; with the -d option on `rails new` you can choose e.g. mysql, oracle or postgresql",
          "isCorrect": true
        },
        {
          "text": "PostgreSQL is the default; -e switches the DB",
          "isCorrect": false
        },
        {
          "text": "MySQL is the default; the DB is set in the Gemfile",
          "isCorrect": false
        },
        {
          "text": "SQLite is the default and cannot be changed",
          "isCorrect": false
        }
      ],
      "explanation": "The default DB is SQLite; with the -d option on `rails new` a different DB (e.g. mysql, oracle, postgresql) can be chosen."
    },
    {
      "type": "categorize",
      "title": "1:n vs m:n",
      "context": "Example: 1 User writes n Entries; m Entries belong to n Categories.",
      "question": "Match the ActiveRecord association methods or generators to the appropriate type of relationship (according to the association slides).",
      "items": [
        {
          "text": "has_many :entries",
          "category": "1:n relationship"
        },
        {
          "text": "belongs_to :user",
          "category": "1:n relationship"
        },
        {
          "text": "AddUserReferenceToEntries user:references",
          "category": "1:n relationship"
        },
        {
          "text": "has_and_belongs_to_many :categories",
          "category": "m:n relationship"
        },
        {
          "text": "relation table entries_categories",
          "category": "m:n relationship"
        }
      ],
      "categories": [
        "1:n relationship",
        "m:n relationship"
      ],
      "explanation": "A 1:n relationship uses has_many/belongs_to and a references field (foreign key); an m:n relationship uses has_and_belongs_to_many and a relation table."
    },
    {
      "type": "open",
      "title": "Foreign-Key Convention",
      "context": "Convention: <related model>_id",
      "question": "According to the slide 'Active Records: Associations', what is the foreign-key name for an association to the user model (i.e. for 'An Entry has a user as author')?",
      "accept": [
        "user_id"
      ],
      "sampleAnswer": "user_id",
      "explanation": "The convention is <related model>_id, so in this example user_id as a property of the entries table."
    },
    {
      "type": "code-find-bug",
      "title": "resources Routes",
      "context": null,
      "question": "This routes.rb line is supposed to generate all RESTful routes for Articles (slide 'RESTful Routes and Resources'). Click the faulty line.",
      "language": "ruby",
      "codeLines": [
        "Rails.application.routes.draw do",
        "  resource :articles",
        "end"
      ],
      "buggyLines": [
        1
      ],
      "fix": "It must read `resources :articles` (plural) in order to generate the full set of RESTful routes.",
      "explanation": "According to the slide, the helper for the full set of RESTful routes is `resources` (plural). With `resource` (singular), the line does not match the slide."
    },
    {
      "type": "fill-blank",
      "title": "Nested Resources",
      "context": "Comments are fully dependent on an Article.",
      "question": "Complete the routes.rb so that comments are defined as a nested resource inside articles.",
      "template": "resources :articles do\n  {{0}} :comments\nend",
      "blanks": [
        {
          "accept": [
            "resources"
          ]
        }
      ],
      "explanation": "By nesting `resources :comments` within `resources :articles do ... end`, routes such as /articles/:article_id/comments/:id are created."
    },
    {
      "type": "mc",
      "title": "form_with / form_for",
      "context": null,
      "question": "According to the slide 'Forms', which statements about form helpers are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "FormHelpers know the ActiveRecord model and access its properties directly",
          "isCorrect": true
        },
        {
          "text": "FormTagHelpers are agnostic of a model class and end with '_tag'",
          "isCorrect": true
        },
        {
          "text": "form_with combines form_for and form_tag",
          "isCorrect": true
        },
        {
          "text": "form_for is model-agnostic and strictly requires a url:",
          "isCorrect": false
        },
        {
          "text": "text_field is one of the FormTagHelpers",
          "isCorrect": false
        }
      ],
      "explanation": "FormHelpers (e.g. form_for, text_field) know the ActiveRecord model; FormTagHelpers are model-agnostic and end in '_tag'; form_with combines form_for and form_tag."
    },
    {
      "type": "mc",
      "title": "Seeding",
      "context": "db/seeds.rb with Category.create([...])",
      "question": "According to the slide 'Seeding', how do you initialize the database with starting data (e.g. categories)?",
      "options": [
        {
          "text": "Define the data in db/seeds.rb and run it with `rails db:seed`",
          "isCorrect": true
        },
        {
          "text": "Enter the data in config/database.yml and migrate",
          "isCorrect": false
        },
        {
          "text": "Generate a seed model with `rails generate seed Category`",
          "isCorrect": false
        },
        {
          "text": "Create the data directly in the migration with t.timestamps",
          "isCorrect": false
        }
      ],
      "explanation": "The starting data is defined in db/seeds.rb and executed with `rails db:seed` (also automatically with rails db:setup)."
    },
    {
      "type": "code-find-bug",
      "title": "Unit Test save",
      "context": null,
      "question": "According to the slide 'Ruby on Rails: Unit Tests', this model unit test is supposed to verify that an Entry is saved successfully. Click the faulty line.",
      "language": "ruby",
      "codeLines": [
        "test \"should create Entry\" do",
        "  entry = Entry.new",
        "  entry.content = \"testing!\"",
        "  assert_raise entry.save",
        "end"
      ],
      "buggyLines": [
        3
      ],
      "fix": "The final assertion must read `assert entry.save` (verifies that save successfully returns true).",
      "explanation": "According to the slide, successful saving is verified with `assert entry.save`. `assert_raise entry.save` does not match the slide and checks the wrong thing."
    },
    {
      "type": "open",
      "title": "Running Model Tests",
      "context": null,
      "question": "According to the slide, which rails command do you use to run the model unit tests?",
      "accept": [
        "rails test:models",
        "rails test models",
        "test:models"
      ],
      "sampleAnswer": "rails test:models",
      "explanation": "According to the slide 'Ruby on Rails: Unit Tests', model tests are run with `rails test:models`."
    },
    {
      "type": "self-assess",
      "title": "Nested-Route Shortcut",
      "context": null,
      "question": "Explain what the notation `[@article, comment]` in `link_to 'Destroy', [@article, comment], method: :delete` does, according to the slide 'Partials: article, comment'.",
      "answer": "The array [@article, comment] is a shorthand that creates a nested named route. It is short for article_comment_path(article_id: @article, id: comment), i.e. the path /articles/:article_id/comments/:id. Together with method: :delete, this produces the delete link for a comment within an article.",
      "explanation": "The answer should explain that the array creates a nested named route."
    },
    {
      "type": "categorize",
      "title": "destroy vs delete",
      "context": null,
      "question": "Match the ActiveRecord methods for removing records to their behavior according to the slide 'Remove'.",
      "items": [
        {
          "text": "destroy",
          "category": "Instantiates object before deleting"
        },
        {
          "text": "delete",
          "category": "Removes directly from the db"
        },
        {
          "text": "delete_all",
          "category": "Removes directly from the db"
        }
      ],
      "categories": [
        "Instantiates object before deleting",
        "Removes directly from the db"
      ],
      "explanation": "destroy instantiates the object before deleting; delete removes directly from the db; delete_all removes multiple records (optionally with a condition) directly from the db."
    },
    {
      "type": "mc",
      "title": "JSON with JBuilder",
      "context": "format.json { render :show, status: :created, location: @article }",
      "question": "According to the slide 'Format JSON', how is the JSON output of an article generated?",
      "options": [
        {
          "text": "Via the JBuilder gem and .jbuilder files in the views/ folder, e.g. with json.extract! @article, :id, :title, :body, ...",
          "isCorrect": true
        },
        {
          "text": "Through automatic serialization in the migration",
          "isCorrect": false
        },
        {
          "text": "Via the file config/database.yml in the production environment",
          "isCorrect": false
        },
        {
          "text": "With the FormTagHelper json_tag in the form",
          "isCorrect": false
        }
      ],
      "explanation": "The JBuilder gem renders .jbuilder files from the views/ folder; json.extract! outputs the desired fields (id, title, body, created_at, updated_at)."
    },
    {
      "type": "fill-blank",
      "title": "Multi-Value Whitelist",
      "context": "Note: special handling of multi-value fields.",
      "question": "Complete the permit line that, in addition to title and body, allows the multi-value field category_ids for the m:n categories (slide 'Add Categories to Param Whitelist').",
      "template": "params.require(:article).permit(:title, :body, {category_ids: {{0}}})",
      "blanks": [
        {
          "accept": [
            "[]",
            "[ ]"
          ]
        }
      ],
      "explanation": "Multi-value fields are given as {category_ids: []} so that an array of IDs is permitted."
    },
    {
      "type": "mc",
      "title": "Active Storage Storage",
      "context": null,
      "question": "According to the slides, how and where does Rails Active Storage store uploaded files? (Multiple answers possible)",
      "options": [
        {
          "text": "The files themselves are not stored in the database",
          "isCorrect": true
        },
        {
          "text": "Two metadata tables are used: active_storage_blobs and active_storage_attachments",
          "isCorrect": true
        },
        {
          "text": "Local storage and cloud storage (e.g. Amazon S3) are supported",
          "isCorrect": true
        },
        {
          "text": "The image data is stored as a BLOB column directly in the model's table",
          "isCorrect": false
        },
        {
          "text": "Active Storage requires extensive manual configuration",
          "isCorrect": false
        }
      ],
      "explanation": "Active Storage does NOT store the files in the database; it only manages metadata in two tables (active_storage_blobs and active_storage_attachments). It supports local storage and cloud services with minimal configuration."
    },
    {
      "type": "order",
      "title": "Active Storage Setup",
      "context": null,
      "question": "Put the steps for installing and setting up Active Storage (including image variants) in the correct order.",
      "items": [
        "> rails active_storage:install",
        "> rails db:migrate",
        "Set config.active_storage.service = :local in development.rb",
        "Add gem \"image_processing\", \"~> 1.2\" to the Gemfile",
        "> bundle install"
      ],
      "explanation": "First Active Storage is installed and the migration is run, then the storage service is configured. For variants, the image_processing gem is added and installed via bundle install."
    },
    {
      "type": "mc",
      "title": "has_many_attached",
      "context": "class Photo < ApplicationRecord\n  # ???\nend",
      "question": "Which model declaration links a Photo model to MULTIPLE image attachments via Active Storage?",
      "options": [
        {
          "text": "has_many_attached :images",
          "isCorrect": true
        },
        {
          "text": "has_one_attached :images",
          "isCorrect": false
        },
        {
          "text": "has_many :images, attached: true",
          "isCorrect": false
        },
        {
          "text": "attaches_many :images",
          "isCorrect": false
        }
      ],
      "explanation": "has_many_attached :images allows multiple attachments; has_one_attached :image allows only a single one."
    },
    {
      "type": "categorize",
      "title": "Variant Methods",
      "context": null,
      "question": "Match the Active Storage variant methods according to whether they maintain the aspect ratio or can change it.",
      "items": [
        {
          "text": "resize_to_limit (never grows bigger than the original)",
          "category": "Aspect ratio is maintained"
        },
        {
          "text": "resize_to_fit (may scale down or up)",
          "category": "Aspect ratio is maintained"
        },
        {
          "text": "resize_to_fill (center-crop to exact size)",
          "category": "Forces exact dimensions"
        },
        {
          "text": "resize_and_pad (adds padding for exact dimensions)",
          "category": "Forces exact dimensions"
        }
      ],
      "categories": [
        "Aspect ratio is maintained",
        "Forces exact dimensions"
      ],
      "explanation": "resize_to_limit and resize_to_fit maintain the aspect ratio (limit never grows the image bigger than the original). resize_to_fill cuts the image (center-crop) and resize_and_pad adds padding to force exact dimensions."
    },
    {
      "type": "fill-blank",
      "title": "Variant in View",
      "context": "Outputting a scaled image variant in the view.",
      "question": "Complete the ERB code that displays the image scaled down to a maximum of 300x300 pixels (maintaining aspect ratio, never enlarging).",
      "template": "<%= image_tag @photo.image.{{0}}(resize_to_limit: [300,300]) %>",
      "blanks": [
        {
          "accept": [
            "variant"
          ]
        }
      ],
      "explanation": "image_tag renders the image; .variant(resize_to_limit: [300,300]) creates the scaled variant that maintains the aspect ratio and never grows the original bigger."
    },
    {
      "type": "code-find-bug",
      "title": "image_tag Condition",
      "context": null,
      "question": "This ERB partial should only display the attached image when an image is present. Click the faulty line.",
      "language": "erb",
      "codeLines": [
        "<% if @photo.image.exists? %>",
        "  <%= image_tag @photo.image %>",
        "<% else %>",
        "  <p>No image attached.</p>",
        "<% end %>"
      ],
      "buggyLines": [
        0
      ],
      "fix": "The check must be @photo.image.attached?.",
      "explanation": "Active Storage's correct check method is called attached?, not exists?. @photo.image.attached? returns true when an image is attached."
    },
    {
      "type": "fill-blank",
      "title": "Strong Parameters",
      "context": "Strong Parameters in the PhotosController for the image upload.",
      "question": "Complete the private method photo_params in the PhotosController, which permits only the :image parameter.",
      "template": "def photo_params\n  params.require(:photo).{{0}}(:image)\nend",
      "blanks": [
        {
          "accept": [
            "permit"
          ]
        }
      ],
      "explanation": "params.require(:photo) enforces the top-level key, and .permit(:image) specifically allows the image attribute."
    },
    {
      "type": "mc",
      "title": "Session Handling",
      "context": null,
      "question": "According to the slide, how is session handling implemented in Rails and how do you access the session?",
      "options": [
        {
          "text": "As default \"middleware\"; accessed via the hash variable session, e.g. session[:user_id]",
          "isCorrect": true
        },
        {
          "text": "As a database table; accessed via Session.find",
          "isCorrect": false
        },
        {
          "text": "As a Cookie class; accessed exclusively via cookies.permanent",
          "isCorrect": false
        },
        {
          "text": "As a global constant SESSION; accessed via SESSION[:user_id]",
          "isCorrect": false
        }
      ],
      "explanation": "Session handling is implemented as default middleware. You access the session through the hash-like variable session, e.g. session[:user_id] = @user.id."
    },
    {
      "type": "open",
      "title": "Singular Resource",
      "context": "config/routes.rb for a RESTful login: # ??? :session",
      "question": "Which keyword is used in config/routes.rb for the session resource (singular, because there is only one session at a time and no index action is needed)?",
      "accept": [
        "resource",
        "resource :session"
      ],
      "sampleAnswer": "resource (singular) -> resource :session",
      "explanation": "Since there is only one session at a time, you use the singular form resource :session (without the s). This generates NO sessions_path route and no index action."
    },
    {
      "type": "mc",
      "title": "Login/Logout REST Actions",
      "context": null,
      "question": "According to the slide, which HTTP methods and routes are used for login and logout of the session resource? (Multiple answers possible)",
      "options": [
        {
          "text": "GET new_session_path shows the login form (new)",
          "isCorrect": true
        },
        {
          "text": "POST session_path creates the session (login / create)",
          "isCorrect": true
        },
        {
          "text": "DELETE session_path removes the session (logout / destroy)",
          "isCorrect": true
        },
        {
          "text": "PUT sessions_path updates the session (update)",
          "isCorrect": false
        },
        {
          "text": "GET sessions_path lists all sessions (index)",
          "isCorrect": false
        }
      ],
      "explanation": "GET new_session_path shows the login form (new), POST session_path creates the session (create/login), and DELETE session_path removes the session (destroy/logout)."
    },
    {
      "type": "fill-blank",
      "title": "Named Login Routes",
      "context": "Mapping additional named routes for login and logout.",
      "question": "Complete the two additional routes in config/routes.rb that map named /login and /logout paths to the SessionsController.",
      "template": "get '/login'  => \"sessions#{{0}}\", as: :login\nget '/logout' => \"sessions#{{1}}\", as: :logout",
      "blanks": [
        {
          "accept": [
            "new"
          ]
        },
        {
          "accept": [
            "destroy"
          ]
        }
      ],
      "explanation": "/login maps to the new action (show the login form), and /logout maps to the destroy action (remove the session). The as: option creates the named path (login_path and logout_path respectively)."
    },
    {
      "type": "code-find-bug",
      "title": "User authenticate",
      "context": null,
      "question": "This class method should authenticate a User by email and password. Click the faulty line.",
      "language": "ruby",
      "codeLines": [
        "def self.authenticate(email, password)",
        "  user = find_by_email(email)",
        "  return user if user && user.password == password",
        "end"
      ],
      "buggyLines": [
        2
      ],
      "fix": "The check must use user.authenticate(password) (provided by has_secure_password).",
      "explanation": "has_secure_password provides the instance method authenticate. Therefore you must call user.authenticate(password), not user.password ==. The stored password_digest is a bcrypt hash and does not match the plain-text password."
    },
    {
      "type": "mc",
      "title": "has_secure_password",
      "context": null,
      "question": "According to the slide, which prerequisites/components belong to the User model with a password? (Multiple answers possible)",
      "options": [
        {
          "text": "The bcrypt gem is included in the Gemfile",
          "isCorrect": true
        },
        {
          "text": "The model uses has_secure_password",
          "isCorrect": true
        },
        {
          "text": "The model is generated with password_digest:string",
          "isCorrect": true
        },
        {
          "text": "The model uses has_plain_password and stores the plain-text password",
          "isCorrect": false
        },
        {
          "text": "The migration creates a password:string column",
          "isCorrect": false
        }
      ],
      "explanation": "The bcrypt gem is included in the Gemfile, the model gets has_secure_password, and it is generated with the password_digest:string column."
    },
    {
      "type": "order",
      "title": "Login Flow create",
      "context": "The user submits the login form via POST to session_path.",
      "question": "Put the steps of a successful login in the create action of the SessionsController into the correct order.",
      "items": [
        "The form is submitted via POST to session_path",
        "User.authenticate(params[:email], params[:password]) checks the login credentials",
        "Set session[:user_id] = user.id",
        "redirect_to root_path with notice: \"Logged in successfully\""
      ],
      "explanation": "The controller authenticates the user with the submitted params, stores the user.id in the session on success, and then redirects to the root_path."
    },
    {
      "type": "code-find-bug",
      "title": "Logout destroy",
      "context": null,
      "question": "This destroy action should log the user out. Click the faulty line.",
      "language": "ruby",
      "codeLines": [
        "def destroy",
        "  clear_session",
        "  redirect_to root_path, notice: \"You successfully logged out\"",
        "end"
      ],
      "buggyLines": [
        1
      ],
      "fix": "Instead of clear_session, reset_session must be called.",
      "explanation": "According to the slide, logging out calls reset_session, which resets the entire session. clear_session is not a valid Rails method for this."
    },
    {
      "type": "fill-blank",
      "title": "current_user Helper",
      "context": "# Code in app/controllers/application_controller.rb",
      "question": "Complete the current_user method and the line that also makes it available in the views.",
      "template": "def current_user\n  @current_user ||= session[:user_id] &&\n    User.find_by(id: session[:user_id])\nend\n{{0}} :current_user",
      "blanks": [
        {
          "accept": [
            "helper_method"
          ]
        }
      ],
      "explanation": "@current_user ||= ... memoizes the result. session[:user_id] returns the stored ID, and User.find_by(id: ...) loads the user. helper_method makes the controller method available in the view."
    },
    {
      "type": "self-assess",
      "title": "helper_method Purpose",
      "context": null,
      "question": "Explain what helper_method :current_user in the application_controller does and why it is needed.",
      "answer": "current_user (and logged_in?) are (protected) controller methods defined in the ApplicationController. By default, controller methods are only available within the controllers, not in the views/templates. helper_method :current_user exports the method as a helper so that it can also be called in the ERB templates (e.g. in the layout with <% if logged_in? %>). This lets you, for example, display the login or logout link depending on the login status.",
      "explanation": "helper_method makes a method defined in the controller also callable in the views."
    },
    {
      "type": "mc",
      "title": "before_action authenticate",
      "context": "class ArticlesController < ApplicationController\n  before_action :authenticate, except: %i[index show]\nend",
      "question": "What does the line before_action :authenticate, except: %i[index show] do in the ArticlesController?",
      "options": [
        {
          "text": "For all actions except index and show, the user must be logged in",
          "isCorrect": true
        },
        {
          "text": "Only index and show require a login; all other actions are open",
          "isCorrect": false
        },
        {
          "text": "All actions including index and show require a login",
          "isCorrect": false
        },
        {
          "text": "The authenticate method is run after every action",
          "isCorrect": false
        }
      ],
      "explanation": "before_action :authenticate requires the user to be logged in for all actions except index and show (i.e. for new, edit, delete, etc.). %i[...] creates an array of symbols."
    },
    {
      "type": "open",
      "title": "Percent Notation %i",
      "context": null,
      "question": "What data type does the \"percent notation\" %i[index show] create in Ruby?",
      "accept": [
        "array of symbols",
        "array von symbolen",
        "symbol array",
        "symbolarray",
        "array aus symbolen",
        "an array of symbols"
      ],
      "sampleAnswer": "An array of symbols (here [:index, :show]).",
      "explanation": "%i[...] is the percent notation and creates an array of symbols, here [:index, :show]."
    },
    {
      "type": "self-assess",
      "title": "authenticate & access_denied",
      "context": null,
      "question": "Explain the interplay of the methods authenticate, logged_in?, and access_denied in the application_controller during the login check.",
      "answer": "authenticate is the method run via before_action before protected actions. It uses logged_in? (which in turn evaluates current_user.is_a? User) to check whether a valid user is logged in. If so, authenticate returns true and the actual action is executed. Otherwise it calls access_denied, which redirects to the login form via redirect_to login_path (with notice: \"Please log in to continue\") and returns false, thereby aborting the processing of the original action.",
      "explanation": "authenticate is the before_action entry point that decides via logged_in? and, when no login is present, redirects to access_denied."
    },
    {
      "type": "fill-blank",
      "title": "Layout Login Link",
      "context": "<!-- app/views/layouts/application.html.erb -->",
      "question": "Complete the layout code that displays the logout or login link depending on the login status.",
      "template": "<% if {{0}} %>\n  <%= link_to \"Logout\", logout_path %>\n<% else %>\n  <%= link_to \"Login\", login_path %>\n<% end %>",
      "blanks": [
        {
          "accept": [
            "logged_in?",
            "logged_in"
          ]
        }
      ],
      "explanation": "logged_in? (available as a helper_method) decides whether the logout link (logout_path) or the login link (login_path) is displayed."
    },
    {
      "type": "categorize",
      "title": "Login vs. Logout",
      "context": null,
      "question": "Assign the following elements to the login and logout process respectively.",
      "items": [
        {
          "text": "User.authenticate(params[:email], params[:password])",
          "category": "Login"
        },
        {
          "text": "session[:user_id] = user.id",
          "category": "Login"
        },
        {
          "text": "new_session_path displays the form",
          "category": "Login"
        },
        {
          "text": "reset_session",
          "category": "Logout"
        },
        {
          "text": "DELETE session_path",
          "category": "Logout"
        },
        {
          "text": "destroy action of the SessionsController",
          "category": "Logout"
        }
      ],
      "categories": [
        "Login",
        "Logout"
      ],
      "explanation": "Login uses the new/create action, sets session[:user_id] and verifies via User.authenticate. Logout uses the destroy action with reset_session."
    },
    {
      "type": "mc",
      "title": "Login Form Path",
      "context": "<%= form_with url: session_path do %> ... <% end %>",
      "question": "To which URL/route does the login form in app/views/sessions/new.html.erb send its data, and which helper is used to create it?",
      "options": [
        {
          "text": "form_with url: session_path; via POST to the create action",
          "isCorrect": true
        },
        {
          "text": "form_with url: new_session_path; via GET to the new action",
          "isCorrect": false
        },
        {
          "text": "form_with url: sessions_path; via POST to the index action",
          "isCorrect": false
        },
        {
          "text": "form_with url: login_path; via DELETE to the destroy action",
          "isCorrect": false
        }
      ],
      "explanation": "The form is created with form_with url: session_path. Via POST to session_path it reaches the create action of the SessionsController."
    },
    {
      "type": "open",
      "title": "Seeding a Test User",
      "context": "db/seeds.rb contains: User.create([{email: 'a@b.c', password: 'abc'}])",
      "question": "Which rails command runs the file db/seeds.rb, for example to create a test user?",
      "accept": [
        "rails db:seed",
        "db:seed",
        "> rails db:seed",
        "bin/rails db:seed"
      ],
      "sampleAnswer": "rails db:seed",
      "explanation": "rails db:seed runs the file db/seeds.rb and thereby creates, for example, the test user."
    },
    {
      "type": "mc",
      "title": "Maven Basics",
      "context": null,
      "question": "What is Maven according to the slides?",
      "options": [
        {
          "text": "A Build Automation Tool that automates steps of software configuration",
          "isCorrect": true
        },
        {
          "text": "A servlet engine for delivering web pages",
          "isCorrect": false
        },
        {
          "text": "A programming language for building web applications",
          "isCorrect": false
        },
        {
          "text": "A relational database by Apache",
          "isCorrect": false
        }
      ],
      "explanation": "On the slides Maven is described as a \"Build Automation Tool\" that automates steps of software configuration, and it is an Apache project."
    },
    {
      "type": "mc",
      "title": "Maven Tasks",
      "context": null,
      "question": "Which tasks does Maven automate according to the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "Managing dependencies",
          "isCorrect": true
        },
        {
          "text": "Compiling",
          "isCorrect": true
        },
        {
          "text": "Generating documentation",
          "isCorrect": true
        },
        {
          "text": "Running tests",
          "isCorrect": true
        },
        {
          "text": "Live debugging of browser JavaScript",
          "isCorrect": false
        }
      ],
      "explanation": "The slides explicitly name: managing dependencies, compiling, archiving, generating documentation and testing."
    },
    {
      "type": "open",
      "title": "Configuration File",
      "context": null,
      "question": "What is the name of the XML file with which Maven describes the project along with its dependencies and build steps?",
      "accept": [
        "pom.xml",
        "pom"
      ],
      "sampleAnswer": "pom.xml",
      "explanation": "Maven describes the project in the pom.xml (Project Object Model)."
    },
    {
      "type": "mc",
      "title": "Repositories & Cache",
      "context": null,
      "question": "How does Maven obtain dependencies and plugins?",
      "options": [
        {
          "text": "They are downloaded dynamically from one or more repositories and stored in a local cache",
          "isCorrect": true
        },
        {
          "text": "They must be copied manually as .jar into the target folder",
          "isCorrect": false
        },
        {
          "text": "They are bundled with the Maven installation and are not loaded afterwards",
          "isCorrect": false
        },
        {
          "text": "They are generated at runtime by the servlet container",
          "isCorrect": false
        }
      ],
      "explanation": "Dependencies and plugins are downloaded dynamically from one or more repositories and stored in a local cache."
    },
    {
      "type": "open",
      "title": "Maven Principle",
      "context": null,
      "question": "Which Maven principle states that sensible defaults apply as long as you don't explicitly configure something different? (English term)",
      "accept": [
        "Convention over Configuration",
        "convention over configuration",
        "CoC"
      ],
      "sampleAnswer": "Convention over Configuration",
      "explanation": "Maven follows the principle of \"Convention over Configuration\": standard conventions reduce the configuration needed."
    },
    {
      "type": "categorize",
      "title": "Classifying Project Structure",
      "context": null,
      "question": "Assign the following paths/contents to the correct Maven standard directory role.",
      "items": [
        {
          "text": "java: Java source code",
          "category": "src (input files)"
        },
        {
          "text": "resources: other files like .properties bundles",
          "category": "src (input files)"
        },
        {
          "text": "test: files for automatic test runs (JUnit)",
          "category": "src (input files)"
        },
        {
          "text": "classes: compiled Java classes",
          "category": "target (generated files)"
        }
      ],
      "categories": [
        "src (input files)",
        "target (generated files)"
      ],
      "explanation": "According to the slide \"Default Project Structure\", src/ contains all input files (java, resources, test), while target/ contains all generated files, including classes with the compiled classes."
    },
    {
      "type": "fill-blank",
      "title": "Standard Directories",
      "context": "This is about the two main subfolders of src/ in the Maven convention.",
      "question": "Complete the Maven standard project structure under src/.",
      "template": "src/\n  {{0}}/   (alle Dateien zum Erzeugen des Resultats)\n    java/\n    resources/\n  {{1}}/   (alle Dateien für automatische Testläufe)",
      "blanks": [
        {
          "accept": [
            "main"
          ]
        },
        {
          "accept": [
            "test"
          ]
        }
      ],
      "language": "text",
      "explanation": "According to the slide, src/ contains main (all files for generating the result) and test (all files for automatic test runs)."
    },
    {
      "type": "order",
      "title": "Default Lifecycle",
      "context": "According to the slide \"Standard Lifecycles\", default lifecycle.",
      "question": "Put the phases of the Maven default lifecycle in the correct order.",
      "items": [
        "validate",
        "compile",
        "test",
        "package",
        "verify",
        "deploy"
      ],
      "explanation": "The slide lists the default lifecycle as validate, compile, test, package, integration-test, verify, install, deploy."
    },
    {
      "type": "mc",
      "title": "Standard Lifecycles",
      "context": null,
      "question": "Which three standard lifecycles do the slides name? (Multiple answers possible)",
      "options": [
        {
          "text": "default",
          "isCorrect": true
        },
        {
          "text": "clean",
          "isCorrect": true
        },
        {
          "text": "site",
          "isCorrect": true
        },
        {
          "text": "release",
          "isCorrect": false
        },
        {
          "text": "debug",
          "isCorrect": false
        }
      ],
      "explanation": "The slide \"Standard Lifecycles\" names default, clean and site."
    },
    {
      "type": "categorize",
      "title": "Maven Notions",
      "context": "From the slide \"Maven Notions\".",
      "question": "Match the Maven terms to their description.",
      "items": [
        {
          "text": "A project templating toolkit / scaffold",
          "category": "archetype"
        },
        {
          "text": "External library needed to compile/run the project",
          "category": "dependency"
        },
        {
          "text": "Is listed in the pom.xml",
          "category": "dependency"
        },
        {
          "text": "Generates a project scaffold from a template",
          "category": "archetype"
        }
      ],
      "categories": [
        "archetype",
        "dependency"
      ],
      "explanation": "An archetype is a project templating toolkit/scaffold; a dependency is an external library that is listed in the pom.xml and downloaded automatically."
    },
    {
      "type": "open",
      "title": "Central Repository",
      "context": null,
      "question": "From which central repository are dependencies downloaded automatically by default according to the slides? (Name)",
      "accept": [
        "maven central",
        "mavencentral",
        "Maven Central",
        "central"
      ],
      "sampleAnswer": "Maven Central",
      "explanation": "The slide names \"maven central\" (and the spring enterprise bundle repository) as central repositories."
    },
    {
      "type": "self-assess",
      "title": "Library vs. Framework",
      "context": null,
      "question": "Explain the difference between a library and a framework based on the \"Hollywood Principle\" named on the slide.",
      "answer": "With a library, your own application calls the library code: the application keeps control and uses the library as a tool. With a framework it is the other way around: the framework provides the underlying scaffold and calls your own application code. This is the \"Hollywood Principle\": \"Don't call us, we call you\". So the application is embedded into the framework and called by the framework at the intended points. Object-oriented techniques such as inheritance, polymorphism and dynamic binding help a lot here, because your own code is hooked in at the intended points, for example by overriding methods.",
      "explanation": "The difference in control flow is the core: with a library the application calls the code, with a framework the framework calls the application."
    },
    {
      "type": "mc",
      "title": "Servlet Principle",
      "context": null,
      "question": "What is a servlet and how is it called?",
      "options": [
        {
          "text": "A Java object that is called by the servlet engine when needed, is mapped to a URL and is triggered by an HTTP request",
          "isCorrect": true
        },
        {
          "text": "A standalone program that starts the web server at boot time",
          "isCorrect": false
        },
        {
          "text": "An HTML file with embedded JavaScript",
          "isCorrect": false
        },
        {
          "text": "A Maven plugin for packaging WAR files",
          "isCorrect": false
        }
      ],
      "explanation": "A servlet is a Java object called by the \"servlet engine\" when needed (framework principle), is mapped to a URL and is called by an HTTP request."
    },
    {
      "type": "order",
      "title": "Servlet Lifecycle",
      "context": "From the \"Servlet API\" slide. Note: one method is called only once, one per request, and one when the servlet is unloaded.",
      "question": "Put the lifecycle methods of a servlet in the order in which they are called by the servlet engine.",
      "items": [
        "init()",
        "service()",
        "destroy()"
      ],
      "explanation": "init() is called exactly once before any other interaction, service() on every HTTP request, and destroy() when the servlet is unloaded."
    },
    {
      "type": "categorize",
      "title": "Servlet Methods",
      "context": "From the slides on HttpServletResponse and HttpServletRequest.",
      "question": "Match each method to its task: creating the response or reading the request.",
      "items": [
        {
          "text": "setStatus(int sc)",
          "category": "Create response (HttpServletResponse)"
        },
        {
          "text": "setContentType(String type)",
          "category": "Create response (HttpServletResponse)"
        },
        {
          "text": "getWriter()",
          "category": "Create response (HttpServletResponse)"
        },
        {
          "text": "getParameter(String)",
          "category": "Read request (HttpServletRequest)"
        },
        {
          "text": "getMethod()",
          "category": "Read request (HttpServletRequest)"
        }
      ],
      "categories": [
        "Create response (HttpServletResponse)",
        "Read request (HttpServletRequest)"
      ],
      "explanation": "setStatus, setContentType and getWriter belong to HttpServletResponse (creating the response); getParameter and getMethod belong to HttpServletRequest (reading the request)."
    },
    {
      "type": "code-find-bug",
      "title": "Servlet Output Channel",
      "context": "A minimal HelloWorld servlet that is to be mapped to /HelloWorld.",
      "question": "Exactly one line in this servlet is wrong. Click on the faulty line.",
      "language": "java",
      "codeLines": [
        "@WebServlet(\"/HelloWorld\")",
        "public class HelloWorld extends HttpServlet {",
        "    public void doGet(HttpServletRequest request,",
        "                      HttpServletResponse response)",
        "        throws IOException {",
        "        response.setContentType(\"text/html\");",
        "        PrintWriter out = response.getReader();",
        "        out.println(\"<h1>HELLO WORLD</h1>\");",
        "    }",
        "}"
      ],
      "buggyLines": [
        6
      ],
      "fix": "Instead of response.getReader() it must read response.getWriter() to obtain the output channel (PrintWriter) of the response.",
      "explanation": "The output channel of the response is provided by getWriter() (a PrintWriter). getReader() does not exist here; to write the response you need response.getWriter()."
    },
    {
      "type": "fill-blank",
      "title": "web.xml Mapping",
      "context": "Excerpt from a web.xml.",
      "question": "Complete the servlet mapping in web.xml that maps HelloWorld to /HelloWorld.",
      "template": "<servlet-mapping>\n  <servlet-name>HelloWorld</servlet-name>\n  <{{0}}>/HelloWorld</{{0}}>\n</servlet-mapping>",
      "blanks": [
        {
          "accept": [
            "url-pattern",
            "urlpattern"
          ]
        }
      ],
      "language": "xml",
      "explanation": "Within <servlet-mapping>, the URL is assigned to the servlet via the <url-pattern> element."
    },
    {
      "type": "self-assess",
      "title": "Servlets & Concurrency",
      "context": null,
      "question": "Why are class variables (instance variables) in a servlet dangerous? Refer to the behaviour of the servlet container.",
      "answer": "The servlet container creates only a single instance of a servlet. Every incoming HTTP request is handled concurrently in its own thread, meaning the service() method is called simultaneously from multiple threads. Class/instance variables are shared by all of these threads. If one thread writes such a variable while another reads it or also writes it, race conditions occur: a thread may see the value that another request has just set. These bugs are often hard to reproduce. Local variables are safe because each thread has its own. Shared resources must be synchronized; a common solution is object pooling (for example, connection pools for databases).",
      "explanation": "The container creates only one instance, whose service() method runs concurrently in multiple threads, so shared fields must be synchronized."
    },
    {
      "type": "mc",
      "title": "Session & State",
      "context": null,
      "question": "HTTP is a stateless protocol. How does a session make sure that requests can be related to one another? (Multiple answers possible)",
      "options": [
        {
          "text": "Every request of the session contains the same unique session id",
          "isCorrect": true
        },
        {
          "text": "The session id is stored as a cookie and resent by the browser",
          "isCorrect": true
        },
        {
          "text": "Via URL rewriting the session id is appended to URLs as a query string if cookies are disabled",
          "isCorrect": true
        },
        {
          "text": "The server keeps a permanently open TCP connection per client to store the state",
          "isCorrect": false
        }
      ],
      "explanation": "The session makes sure that every request carries the same unique session id. It is transmitted via a cookie or via URL rewriting (response.encodeURL)."
    },
    {
      "type": "open",
      "title": "Creating a Session",
      "context": "request is an HttpServletRequest.",
      "question": "Which method call on HttpServletRequest returns the session and creates it if none exists yet? State the call.",
      "accept": [
        "request.getSession()",
        "getSession()",
        "request.getSession(true)",
        "getSession(true)"
      ],
      "sampleAnswer": "request.getSession() or request.getSession(true)",
      "explanation": "request.getSession() (with no parameter or with true) creates the session if none exists yet; getSession(false) returns null if none exists."
    },
    {
      "type": "mc",
      "title": "JSP Basics",
      "context": null,
      "question": "Which statements about Jakarta (Server) Pages (JSP) are correct according to the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "JSP is used to dynamically create HTML pages with embedded program logic",
          "isCorrect": true
        },
        {
          "text": "JSP is based on servlets",
          "isCorrect": true
        },
        {
          "text": "JSP has a special \"Expression Language\" (EL)",
          "isCorrect": true
        },
        {
          "text": "JSP is a standalone, complete programming language that replaces Java",
          "isCorrect": false
        }
      ],
      "explanation": "JSP is used to dynamically generate HTML with embedded program logic, has its own Expression Language (EL), and is based on servlets."
    },
    {
      "type": "order",
      "title": "JSP Processing",
      "context": "From the \"JSP how it works\" flow diagram (case: servlet not yet loaded / not up to date).",
      "question": "Put the steps that a JSP container performs when processing a not-yet-loaded JSP for the first time into the correct order.",
      "items": [
        "parse JSP",
        "create JSP Servlet Source",
        "compile JSP Servlet",
        "load JSP Servlet",
        "create Response"
      ],
      "explanation": "The container parses the JSP, generates the servlet source code from it, compiles it, loads the resulting servlet, and uses it to create the response."
    },
    {
      "type": "categorize",
      "title": "JSP Scripting Elements",
      "context": "From the \"Scripting Elements\" slide.",
      "question": "Match the JSP scripting elements to their syntax/task.",
      "items": [
        {
          "text": "<%= Math.PI %>",
          "category": "Expression (produces output)"
        },
        {
          "text": "<% String name = request.getParameter(\"name\"); %>",
          "category": "Scriptlet (Java code)"
        },
        {
          "text": "<%! public long fact(long x) { ... } %>",
          "category": "Declaration (variables/methods)"
        },
        {
          "text": "produces output directly in the HTML",
          "category": "Expression (produces output)"
        }
      ],
      "categories": [
        "Expression (produces output)",
        "Scriptlet (Java code)",
        "Declaration (variables/methods)"
      ],
      "explanation": "Expressions (<%= %>) produce output, scriptlets (<% %>) contain Java code, declarations (<%! %>) declare class variables/methods in the generated servlet."
    },
    {
      "type": "fill-blank",
      "title": "JSP Tag Syntax",
      "context": "JSP tags. Pay attention to the character right after the opening <%.",
      "question": "Complete the JSP scripting elements: an expression that outputs Math.PI, and a declaration of a class variable.",
      "template": "Expression:  <%{{0}} Math.PI %>\nDeclaration: <%{{1}} private String tech=\"JSP\"; %>",
      "blanks": [
        {
          "accept": [
            "=",
            "%="
          ]
        },
        {
          "accept": [
            "!",
            "%!"
          ]
        }
      ],
      "language": "html",
      "explanation": "An expression begins with <%= (outputs the value), a declaration with <%! (declares variables/methods in the generated servlet)."
    },
    {
      "type": "mc",
      "title": "JSP Implicit Objects",
      "context": null,
      "question": "Which of the following is NOT an implicit object on the JSP slide?",
      "options": [
        {
          "text": "connection",
          "isCorrect": true
        },
        {
          "text": "request",
          "isCorrect": false
        },
        {
          "text": "session",
          "isCorrect": false
        },
        {
          "text": "pageContext",
          "isCorrect": false
        },
        {
          "text": "application",
          "isCorrect": false
        }
      ],
      "explanation": "The slide lists: request, response, out, session, pageContext, application. \"connection\" is not among them."
    },
    {
      "type": "self-assess",
      "title": "JSP Scopes",
      "context": null,
      "question": "Name the four JSP scopes in which attributes can be stored, and explain how they differ in terms of visibility/lifetime.",
      "answer": "The four scopes are page, request, session and application. They differ in the reach and lifetime of the stored values: page scope applies only within the current page (a single JSP invocation). request scope spans one request, including pages of the same request reached via forward/include. session scope applies to all requests of a user within their session (several pages/requests of the same user). application scope is global for the entire web application and is therefore visible across all users and pages. All four share the same methods for managing the attributes (setAttribute, getAttribute, getAttributeNames, removeAttribute) but represent scopes of differing breadth.",
      "explanation": "The four scopes are page, request, session and application, ordered from the narrowest to the widest visibility."
    },
    {
      "type": "categorize",
      "title": "Directives vs Actions",
      "context": "From the \"Directives\" and \"Actions\" slides.",
      "question": "Match the JSP tags to the category Directive or Action.",
      "items": [
        {
          "text": "<%@ include file=\"...\" %>",
          "category": "Directive"
        },
        {
          "text": "<%@ page attribute=value %>",
          "category": "Directive"
        },
        {
          "text": "<jsp:forward page=\"...\" />",
          "category": "Action"
        },
        {
          "text": "<jsp:include page=\"...\" />",
          "category": "Action"
        },
        {
          "text": "<jsp:useBean id=\"...\" class=\"...\" />",
          "category": "Action"
        }
      ],
      "categories": [
        "Directive",
        "Action"
      ],
      "explanation": "Directives use the <%@ ... %> syntax (include, page); actions use <jsp:...> tags (forward, include, useBean)."
    },
    {
      "type": "mc",
      "title": "Java Bean Rules",
      "context": null,
      "question": "Which rules must an object satisfy to be a Java Bean according to the slide? (Multiple answers possible)",
      "options": [
        {
          "text": "It has a parameterless default constructor",
          "isCorrect": true
        },
        {
          "text": "For each property there is a setter and a getter method",
          "isCorrect": true
        },
        {
          "text": "It must extend HttpServlet",
          "isCorrect": false
        },
        {
          "text": "All properties must be declared public",
          "isCorrect": false
        }
      ],
      "explanation": "A Java Bean needs a parameterless default constructor and, for each property, a getter and a setter method."
    },
    {
      "type": "code-find-bug",
      "title": "jsp:useBean Property",
      "context": "action.jsp is supposed to create a bean and populate a property from a request parameter.",
      "question": "In this JSP snippet for bean initialization, exactly one line is wrong. Click on it.",
      "language": "xml",
      "codeLines": [
        "<jsp:useBean id=\"bean\" class=\"MyBean\">",
        "  <jsp:getProperty name=\"bean\"",
        "                   property=\"text\"",
        "                   param=\"theText\" />",
        "</jsp:useBean>"
      ],
      "buggyLines": [
        1
      ],
      "fix": "To set a property from a parameter, <jsp:setProperty ...> must be used instead of <jsp:getProperty ...>.",
      "explanation": "To set a property from a parameter, use <jsp:setProperty ...>. <jsp:getProperty> would only output a property, not set it."
    },
    {
      "type": "mc",
      "title": "Expression Language",
      "context": null,
      "question": "Which statements about the Expression Language (EL) are correct according to the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "${} is evaluated immediately, #{} is deferred (e.g. in JSF)",
          "isCorrect": true
        },
        {
          "text": "EL never throws a NullPointerException, but returns null instead",
          "isCorrect": true
        },
        {
          "text": "EL is a simplified syntax, but not a complete programming/scripting language",
          "isCorrect": true
        },
        {
          "text": "EL replaces Maven as the build tool",
          "isCorrect": false
        }
      ],
      "explanation": "EL is a simplified syntax for accessing implicit objects and beans, is NOT a complete programming language, ${} is evaluated immediately, #{} is deferred (e.g. in JSF), and EL NEVER throws a NullPointerException (it returns null instead)."
    },
    {
      "type": "open",
      "title": "EL Property Access",
      "context": "Same as <%= user.getFirstName() %>.",
      "question": "How do you access the property firstName of the bean user in EL using dot notation? Provide the complete EL expression.",
      "accept": [
        "${user.firstName}",
        "${user.firstName }",
        "${ user.firstName }"
      ],
      "sampleAnswer": "${user.firstName}",
      "explanation": "In EL you access bean properties with the dot operator: ${user.firstName} is equivalent to <%= user.getFirstName() %>."
    },
    {
      "type": "fill-blank",
      "title": "EL empty Operator",
      "context": "EL validating operator.",
      "question": "Complete the EL expression that uses the validating operator to check whether input is \"empty\" (null, empty collection or empty string).",
      "template": "${ {{0}} input }",
      "blanks": [
        {
          "accept": [
            "empty"
          ]
        }
      ],
      "language": "text",
      "explanation": "The validating EL operator empty returns true for null, an empty collection/array, or a string of length 0."
    },
    {
      "type": "mc",
      "title": "Logging Motivation",
      "context": null,
      "question": "Why is logging a must-have in server applications? (Multiple answers possible)",
      "options": [
        {
          "text": "In production scenarios debugging is often not possible.",
          "isCorrect": true
        },
        {
          "text": "The application's behaviour can be replicated retrospectively.",
          "isCorrect": true
        },
        {
          "text": "Logging completely eliminates the need for tests.",
          "isCorrect": false
        },
        {
          "text": "Logging speeds up the server's response times.",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, debugging is often not possible in production, and the application's behaviour can be replicated retrospectively from the logs."
    },
    {
      "type": "self-assess",
      "title": "Logging Separation",
      "context": null,
      "question": "Explain what is meant when it is said that logging APIs separate the content of a logging message from its output display form.",
      "answer": "Logging APIs separate the content of a log message (what the programmer writes in the code, e.g. log.debug(\"...\")) from the configurable output display form. The code only contains the message; how and where it is output (e.g. console, file, with which pattern/format such as timestamp, log level) is defined separately via configuration. This way you can change the output without modifying the program code.",
      "explanation": "The separation of message content and configurable output form is the central concept behind logging APIs."
    },
    {
      "type": "fill-blank",
      "title": "Obtaining a Logger",
      "context": "Standard Log4J 2 usage as shown on the slides.",
      "question": "Complete the code to obtain a logger and output a debug message.",
      "template": "Log log = {{0}}.getLogger(TestClass.class);\nlog.{{1}}(\"Hello World!\");",
      "blanks": [
        {
          "accept": [
            "LogManager"
          ]
        },
        {
          "accept": [
            "debug"
          ]
        }
      ],
      "explanation": "A logger is obtained via LogManager.getLogger(...); a debug message is output with log.debug(...)."
    },
    {
      "type": "mc",
      "title": "Log Output",
      "context": null,
      "question": "Given the code Log log = LogManager.getLogger(TestClass.class); log.debug(\"Hello World\"); which console output does the slide show?",
      "options": [
        {
          "text": "[DEBUG] TestClass – Hello World",
          "isCorrect": true
        },
        {
          "text": "DEBUG: Hello World (TestClass)",
          "isCorrect": false
        },
        {
          "text": "Hello World [TestClass.debug]",
          "isCorrect": false
        },
        {
          "text": "[INFO] Hello World – TestClass",
          "isCorrect": false
        }
      ],
      "explanation": "The slide shows the console output in the format [DEBUG] TestClass – Hello World."
    },
    {
      "type": "categorize",
      "title": "Logging APIs",
      "context": null,
      "question": "Match the following statements to the corresponding logging API.",
      "items": [
        {
          "text": "Uses a central configuration file (or has to be specified on java startup)",
          "category": "Java (Util) Logging"
        },
        {
          "text": "Logging API from Java itself, included in the JDK",
          "category": "Java (Util) Logging"
        },
        {
          "text": "Provides a unifying API",
          "category": "Apache Commons Logging"
        },
        {
          "text": "Is a project by Apache (commons.apache.org/logging)",
          "category": "Apache Commons Logging"
        }
      ],
      "categories": [
        "Java (Util) Logging",
        "Apache Commons Logging"
      ],
      "explanation": "Java (Util) Logging is included in the JDK and uses a central configuration file; Apache Commons Logging provides a unifying API from Apache."
    },
    {
      "type": "open",
      "title": "println Rule",
      "context": "The tutorial for Log4J 1.x carries a well-known mnemonic.",
      "question": "Which method should you NOT use for logging according to the cited Log4J rule? (Give the complete call)",
      "accept": [
        "System.out.println",
        "System.out.println()",
        "System.out.println(...)",
        "system.out.println"
      ],
      "sampleAnswer": "System.out.println – instead a logging API (e.g. Log4J) should be used.",
      "explanation": "The slide cites the rule \"Don't use system.out.println\"."
    },
    {
      "type": "code-find-bug",
      "title": "FormatterLogger Bug",
      "context": null,
      "question": "In the following FormatterLogger example exactly one line is faulty. Click the faulty line.",
      "language": "java",
      "codeLines": [
        "import org.apache.logging.log4j.LogManager;",
        "import org.apache.logging.log4j.Logger;",
        "private Logger log = LogManager.getFormatterLogger(TestClass.class);",
        "void testMethod1() {",
        "  int i = 13;",
        "  Strint str = \"Test Formatter\";",
        "  log.debug(\"Hello World, I'm debugging.\");",
        "  log.info(\"%s: i is %d\", str, i);",
        "}"
      ],
      "buggyLines": [
        5
      ],
      "fix": "The data type must be String, not Strint: String str = \"Test Formatter\";",
      "explanation": "The data type for a character string in Java is called String, not Strint – this is a typo from the slides."
    },
    {
      "type": "mc",
      "title": "log4j2.xml Appender",
      "context": null,
      "question": "Which statement about the log4j2.xml configuration is correct according to the slide?",
      "options": [
        {
          "text": "A <Console> appender with target=\"SYSTEM_OUT\" outputs the logs to the console.",
          "isCorrect": true
        },
        {
          "text": "The status attribute of the <Configuration> sets the log level of the business logic.",
          "isCorrect": false
        },
        {
          "text": "A <File> appender cannot be used in addition to a Console appender.",
          "isCorrect": false
        },
        {
          "text": "The log level is defined in the PatternLayout.",
          "isCorrect": false
        }
      ],
      "explanation": "The Console appender with target=\"SYSTEM_OUT\" writes to the console; the status attribute concerns the log level of the logging system itself, and the application-side log level is in the <Root> element."
    },
    {
      "type": "self-assess",
      "title": "Servlets vs JSP",
      "context": null,
      "question": "How do servlets and JSP differ in terms of their suitability? Explain an advantage and a disadvantage for each.",
      "answer": "Servlets are well suited for coding in Java (Java code), but not suited for large pieces of HTML output. JSP, conversely, is well suited for creating HTML output, but not suited for large pieces of Java code. Therefore you combine them sensibly (and additionally use beans for the model).",
      "explanation": "Servlets are suited for Java code, JSP for HTML output – each with the opposite weakness."
    },
    {
      "type": "categorize",
      "title": "Model-1 vs Model-2",
      "context": "From the article \"Servlet and JSP Best Practices\".",
      "question": "Match the statements to the architecture models Model-1 and Model-2.",
      "items": [
        {
          "text": "View and Controller are both realized through JSP",
          "category": "Model-1"
        },
        {
          "text": "Example \"JSPForm\"",
          "category": "Model-1"
        },
        {
          "text": "Controller is a servlet, View is JSP",
          "category": "Model-2"
        },
        {
          "text": "Example \"SimpleBlog\"",
          "category": "Model-2"
        }
      ],
      "categories": [
        "Model-1",
        "Model-2"
      ],
      "explanation": "In Model-1 the JSP serves as both View and Controller; in Model-2 the Controller is a servlet and the View is a JSP. In both models the Model is realized through beans."
    },
    {
      "type": "open",
      "title": "Front Controller",
      "context": null,
      "question": "What is the name of the pattern in which a single servlet is the only entry point (single entry point) for all requests in the Model-2 flow?",
      "accept": [
        "front controller pattern",
        "front controller",
        "front-controller",
        "front controller-pattern"
      ],
      "sampleAnswer": "Front Controller Pattern – the servlet is the single entry point for all requests.",
      "explanation": "The slide refers to the servlet as the single entry point, also known as the \"front controller pattern\"."
    },
    {
      "type": "mc",
      "title": "Thymeleaf Basics",
      "context": null,
      "question": "Which statements about Thymeleaf are correct according to the slide? (Multiple answers possible)",
      "options": [
        {
          "text": "It is a server-side Java template engine.",
          "isCorrect": true
        },
        {
          "text": "Templates are valid HTML even before processing.",
          "isCorrect": true
        },
        {
          "text": "th:* elements and attributes are ignored before processing.",
          "isCorrect": true
        },
        {
          "text": "Thymeleaf runs exclusively in the browser (client-side).",
          "isCorrect": false
        }
      ],
      "explanation": "Thymeleaf is a server-side Java template engine; its templates are valid HTML even before processing, because th:* elements and attributes are then ignored."
    },
    {
      "type": "order",
      "title": "Template Processing",
      "context": null,
      "question": "Put the steps of Thymeleaf template processing in the correct order.",
      "items": [
        "Thymeleaf parses the HTML into a DOM tree",
        "Walks through the tree looking for th:* attributes",
        "Evaluates the (EL-like) expression",
        "Modifies or replaces the element"
      ],
      "explanation": "According to the slide: the HTML is parsed into a DOM tree, this tree is walked through looking for th:* attributes, the expression is evaluated, and the element is modified or replaced."
    },
    {
      "type": "mc",
      "title": "Thymeleaf Components",
      "context": null,
      "question": "What is the role of the TemplateEngine in Thymeleaf?",
      "options": [
        {
          "text": "It is the processor: it receives the template name and the context (data), fetches the template via the resolver, and writes the result to a Writer.",
          "isCorrect": true
        },
        {
          "text": "It finds the templates (that is the job of the ITemplateResolver).",
          "isCorrect": false
        },
        {
          "text": "It stores the variable map with request/session/application scope (that is the job of the WebContext).",
          "isCorrect": false
        },
        {
          "text": "It validates the generated HTML against a DTD.",
          "isCorrect": false
        }
      ],
      "explanation": "The TemplateEngine is the processor; it receives the template name and the context, fetches the template via the ITemplateResolver, and writes the result to a Writer. Finding the templates is the job of the ITemplateResolver, and the data is held by the I/WebContext."
    },
    {
      "type": "self-assess",
      "title": "Singleton Pattern",
      "context": null,
      "question": "Describe the Singleton pattern and why it was used in the SimpleBlog example.",
      "answer": "The Singleton pattern ensures that there is only one single instance per class, which is stored in the class itself. To achieve this, the class has a private constructor (no instance can be created from outside) and a class method getInstance that returns the one instance. In SimpleBlog it was used so that the connection between controller and model works: when there are multiple controllers, you have to make sure that they all get the same model object.",
      "explanation": "The Singleton ensures that multiple controllers get the same model object."
    },
    {
      "type": "self-assess",
      "title": "Reload Problem",
      "context": null,
      "question": "What problem arises when reloading a form submission in the SimpleBlog application flow, and how can it be prevented according to the slide?",
      "answer": "A reload repeats the last request including its parameters. When a form submission is reloaded, this can lead to double entries. It can be prevented by managing a token in the session: when the form is displayed a token is set, and when it is processed (do-add) the token is compared and removed, so that a repeated submission can be detected and rejected.",
      "explanation": "A reload repeats the last request including its parameters; this is prevented by means of a token in the session."
    },
    {
      "type": "mc",
      "title": "Prepared Statements",
      "context": null,
      "question": "Which advantages or properties of prepared statements in JDBC does the slide mention? (Multiple answers possible)",
      "options": [
        {
          "text": "Reusable SQL templates / only one statement object for multiple usage.",
          "isCorrect": true
        },
        {
          "text": "Safe usage thanks to parameters (protection against SQL injection).",
          "isCorrect": true
        },
        {
          "text": "The connection must stay alive while it is in use.",
          "isCorrect": true
        },
        {
          "text": "They work without an existing database connection.",
          "isCorrect": false
        }
      ],
      "explanation": "Prepared statements are reusable SQL templates with parameters (protection against SQL injection); however, the connection must stay alive."
    },
    {
      "type": "fill-blank",
      "title": "PreparedStatement Setter",
      "context": "String q = \"SELECT * FROM G_REC WHERE SCORE > ? AND TEAM = ?\";\nPreparedStatement s = connection.prepareStatement(q);",
      "question": "Complete the PreparedStatement: set the integer value 5000 for the first parameter and the string \"Lions\" for the second.",
      "template": "s.setInt({{0}}, 5000);\ns.setString({{1}}, \"Lions\");",
      "blanks": [
        {
          "accept": [
            "1"
          ]
        },
        {
          "accept": [
            "2"
          ]
        }
      ],
      "explanation": "Parameters are set 1-based via setInt or setString; the first ? is index 1, the second ? is index 2."
    },
    {
      "type": "categorize",
      "title": "Whitebox vs Blackbox",
      "context": null,
      "question": "Assign the properties to either the whitebox test or the blackbox test.",
      "items": [
        {
          "text": "Also called structure or path test",
          "category": "Whitebox test"
        },
        {
          "text": "Looks into the code to find test inputs",
          "category": "Whitebox test"
        },
        {
          "text": "Looks for errors in control structures / data paths",
          "category": "Whitebox test"
        },
        {
          "text": "Controls the function \"from the outside\" via the interface specification",
          "category": "Blackbox test"
        },
        {
          "text": "Also called functional test",
          "category": "Blackbox test"
        },
        {
          "text": "Selection of test cases is oriented on the specification",
          "category": "Blackbox test"
        }
      ],
      "categories": [
        "Whitebox test",
        "Blackbox test"
      ],
      "explanation": "Whitebox tests (structural) look at the code and its control structures; blackbox tests (functional) only look at the interface/specification from the outside."
    },
    {
      "type": "mc",
      "title": "Goals of Testing",
      "context": null,
      "question": "Which statement about the goal of testing matches the slide?",
      "options": [
        {
          "text": "Testing can only show the existence of errors, not their absence – the goal is finding bugs.",
          "isCorrect": true
        },
        {
          "text": "Testing proves that a program is free of errors.",
          "isCorrect": false
        },
        {
          "text": "Good testers make sure that the software works.",
          "isCorrect": false
        },
        {
          "text": "The test paradox states that after enough tests all errors have been found.",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, testing can only show the existence of errors, not their absence; the goal is finding bugs. Good testers make a software fail, good programmers make a software work."
    },
    {
      "type": "categorize",
      "title": "Verification vs Validation",
      "context": null,
      "question": "Assign the terms to either verification or validation.",
      "items": [
        {
          "text": "\"are we building the thing right\"",
          "category": "Verification"
        },
        {
          "text": "Unit tests (component tests)",
          "category": "Verification"
        },
        {
          "text": "\"are we building the right thing\"",
          "category": "Validation"
        },
        {
          "text": "Functional tests",
          "category": "Validation"
        }
      ],
      "categories": [
        "Verification",
        "Validation"
      ],
      "explanation": "Verification means \"are we building the thing right\" (e.g. unit tests), validation means \"are we building the right thing\" (functional tests)."
    },
    {
      "type": "self-assess",
      "title": "Top-Down vs Bottom-Up",
      "context": null,
      "question": "Explain the difference between top-down and bottom-up integration tests, including the terms stub and test driver.",
      "answer": "Both are strategies for integration tests. Top-down starts with the main component and stubs (mainly empty class/function skeletons, also called \"mock objects\") for all other components; the stubs are incrementally replaced with real implementations and every step is tested (regression tests). Bottom-up starts with the most basic components and a test driver; the test driver is gradually replaced with higher-level components, and you build test \"clusters\".",
      "explanation": "Top-down starts with the main component and stubs, bottom-up with basic components and a test driver."
    },
    {
      "type": "open",
      "title": "xUnit Inventor",
      "context": null,
      "question": "Who invented the xUnit testing framework (also known as the inventor of \"Extreme Programming\")?",
      "accept": [
        "Kent Beck",
        "Beck"
      ],
      "sampleAnswer": "Kent Beck – inventor of Extreme Programming and co-signer of the Agile Manifesto.",
      "explanation": "According to the slide, xUnit was invented by Kent Beck, who is also regarded as the inventor of Extreme Programming and a co-signer of the Agile Manifesto."
    },
    {
      "type": "code-find-bug",
      "title": "JUnit Import Bug",
      "context": "The method prepare() is annotated with @BeforeAll (setUp).",
      "question": "In the following JUnit example exactly one import is wrong – the annotation in that line does not match the setup. Click the faulty line.",
      "language": "java",
      "codeLines": [
        "import static org.junit.jupiter.api.Assertions.*;",
        "import org.junit.jupiter.api.Test;",
        "import org.junit.jupiter.api.BeforeEach;",
        "import org.junit.jupiter.api.AfterAll;",
        "@BeforeAll",
        "public void prepare() {}",
        "@Test",
        "public void doSomeTests() {}"
      ],
      "buggyLines": [
        2
      ],
      "fix": "The import must match the annotation that is used: import org.junit.jupiter.api.BeforeAll; (not BeforeEach).",
      "explanation": "The method prepare() is annotated with @BeforeAll, so BeforeAll must be imported, not BeforeEach."
    },
    {
      "type": "mc",
      "title": "JUnit Properties",
      "context": null,
      "question": "Which statements about the JUnit framework are correct according to the slide? (Multiple answers possible)",
      "options": [
        {
          "text": "It is based on annotations and does not need inheritance.",
          "isCorrect": true
        },
        {
          "text": "Test functions are marked with the @Test annotation.",
          "isCorrect": true
        },
        {
          "text": "Tests are not needed for simple getters/setters.",
          "isCorrect": true
        },
        {
          "text": "Test methods must be named with the prefix \"test\".",
          "isCorrect": false
        }
      ],
      "explanation": "JUnit is based on annotations (no inheritance needed), uses @Test for test methods, and requires no naming convention; simple getters/setters do not need to be tested."
    },
    {
      "type": "order",
      "title": "Testing Vicious Circle",
      "context": "The circle arises when you say \"I don't have the time for it\".",
      "question": "Put the steps of the testing vicious circle (circulus vitiosus) in the right order, starting with the lack of time.",
      "items": [
        "Less time means less tests",
        "Less tests mean more bugs",
        "More bugs mean less productivity",
        "Less productivity means more deadline pressure",
        "More deadline pressure means less time"
      ],
      "explanation": "The circle according to the slide: less time -> less tests -> more bugs -> less productivity -> more deadline pressure -> (back to) less time."
    },
    {
      "type": "self-assess",
      "title": "equals with Persistence",
      "context": "MyBean o1 = new MyBean(); ... getMyBeanDAO().save(o1); MyBean o2 = getMyBeanDAO().getById(o1.getId()); assertEquals(o1, o2); // fails!",
      "question": "Why does comparing two persistent objects with assertEquals(o1, o2) fail, and how do you solve the problem?",
      "answer": "The default implementation of equals() compares the physical address (identity). When reading from the database a new object is created and filled with the appropriate values (RowMapper), so o1 and o2 have different addresses but the same values – the comparison fails. Solution: persistent objects have to override equals() and compare the properties / the \"business key\" instead (the fields that uniquely identify the object, not the DB surrogate key). According to the Java rule, when you override equals() you also have to override hashCode() (using the same fields). Eclipse can generate both via Source -> Generate hashCode() and equals().",
      "explanation": "The default equals() compares the physical address; you have to override equals() (and hashCode())."
    },
    {
      "type": "fill-blank",
      "title": "log4j2.xml Level",
      "context": "Excerpt from log4j2.xml inside <Loggers>.",
      "question": "Complete the Root element of log4j2.xml so that the log level is set to info and the Console appender is referenced.",
      "template": "<Root level=\"{{0}}\">\n  <AppenderRef ref=\"{{1}}\"/>\n</Root>",
      "blanks": [
        {
          "accept": [
            "info"
          ]
        },
        {
          "accept": [
            "Console"
          ]
        }
      ],
      "explanation": "The log level is set in the <Root level=\"...\"> element; the appender is referenced via <AppenderRef ref=\"...\"/>."
    },
    {
      "type": "mc",
      "title": "MVC Idea",
      "context": null,
      "question": "What is the basic idea of the MVC architecture according to the slide?",
      "options": [
        {
          "text": "Divide an application into pieces (View, Controller, Model), where each piece is less complex than the whole thing.",
          "isCorrect": true
        },
        {
          "text": "Combine all logic into a single JSP file.",
          "isCorrect": false
        },
        {
          "text": "Merge Model, View, and Controller into a single class to reduce complexity.",
          "isCorrect": false
        },
        {
          "text": "Fully decouple the client from the server so that no servlet is needed anymore.",
          "isCorrect": false
        }
      ],
      "explanation": "MVC divides an application into pieces (View, Controller, Model), each of which is less complex than the whole thing."
    },
    {
      "type": "mc",
      "title": "Singleton & Interfaces",
      "context": null,
      "question": "According to the lecture, why do Singletons contradict the use of interfaces?",
      "options": [
        {
          "text": "The caller must know the concrete implementing class of the callee.",
          "isCorrect": true
        },
        {
          "text": "Singletons cannot implement interfaces.",
          "isCorrect": false
        },
        {
          "text": "Interfaces may not contain static methods.",
          "isCorrect": false
        },
        {
          "text": "Singletons force multiple instances per interface.",
          "isCorrect": false
        }
      ],
      "explanation": "According to slide 39, with a Singleton the caller must know the concrete implementing class of the callee (e.g. via getInstance()). This contradicts the principle of programming against interfaces rather than against concrete classes."
    },
    {
      "type": "mc",
      "title": "Singleton Drawbacks",
      "context": null,
      "question": "Which of the following points are named in the lecture as drawbacks of Singletons? (Multiple answers possible)",
      "options": [
        {
          "text": "They are hard to exchange, e.g. for a test stub.",
          "isCorrect": true
        },
        {
          "text": "They cannot be managed in an object pool.",
          "isCorrect": true
        },
        {
          "text": "Exchanging the component forces a recompile and re-deployment.",
          "isCorrect": true
        },
        {
          "text": "They consume a new instance on every call and therefore use a lot of memory.",
          "isCorrect": false
        },
        {
          "text": "They generally cannot be implemented in Java.",
          "isCorrect": false
        }
      ],
      "explanation": "Slide 39 explicitly names: they contradict interfaces, they are hard to exchange (e.g. for a test stub), they are unflexible (cannot be managed in an object pool), and they are hard to orchestrate (exchanging a component forces a recompile and re-deployment)."
    },
    {
      "type": "order",
      "title": "Singleton Exchange Chain",
      "context": null,
      "question": "Put the causal chain into the correct order that, according to the lecture, explains why Singletons are hard to orchestrate.",
      "items": [
        "You want to exchange a component",
        "You have to recompile",
        "You also have to re-deploy",
        "Deployment is a major task in big projects",
        "Therefore this approach is to be avoided"
      ],
      "explanation": "According to slide 39: if you want to exchange a component you have to recompile; if you have to recompile you also have to re-deploy; deployment can be a major task in big projects and is therefore to be avoided."
    },
    {
      "type": "open",
      "title": "Spring Author",
      "context": null,
      "question": "Whose book \"Expert 1-on-1 J2EE Design and Development\" is the Spring framework based on? Give the author's last name.",
      "accept": [
        "Rod Johnson",
        "Johnson",
        "Rod"
      ],
      "sampleAnswer": "Rod Johnson",
      "explanation": "According to slide 40, Spring is based on the book by Rod Johnson, who is also an administrator of the open-source project."
    },
    {
      "type": "mc",
      "title": "Spring Meta-Framework",
      "context": null,
      "question": "What is meant by describing Spring as a \"Meta\"-framework?",
      "options": [
        {
          "text": "It integrates existing solutions instead of implementing everything itself.",
          "isCorrect": true
        },
        {
          "text": "It is a framework whose only purpose is to generate the code of other frameworks.",
          "isCorrect": false
        },
        {
          "text": "It completely replaces the Java Virtual Machine.",
          "isCorrect": false
        },
        {
          "text": "It is responsible solely for managing metadata.",
          "isCorrect": false
        }
      ],
      "explanation": "According to slide 40, Spring is a \"Meta\"-framework because it integrates existing solutions instead of implementing everything itself."
    },
    {
      "type": "self-assess",
      "title": "Inversion of Control",
      "context": null,
      "question": "Explain the principle of \"Inversion of Control\" (IoC) as described for the Spring Core Container.",
      "answer": "Inversion of Control means that the framework controls the configuration and lifecycle of the application objects. The objects don't configure themselves but get configured from the outside. In addition, the objects don't know the source of their configuration. Control over creating and wiring the objects is thus handed over from the object to the framework (\"inverted\").",
      "explanation": "Self-assessment based on the key statements of slide 45 on the Core Container."
    },
    {
      "type": "categorize",
      "title": "Dependency Injection Types",
      "context": null,
      "question": "Match the terms to the variants named for the Spring Core Container.",
      "items": [
        {
          "text": "JavaBean properties",
          "category": "Setter-based"
        },
        {
          "text": "calls bean.setProperty()",
          "category": "Setter-based"
        },
        {
          "text": "constructor arguments",
          "category": "Constructor-based"
        },
        {
          "text": "passed in when the object is created",
          "category": "Constructor-based"
        },
        {
          "text": "Service Lookup",
          "category": "Alternative to DI"
        },
        {
          "text": "context.getBean(<name>)",
          "category": "Alternative to DI"
        }
      ],
      "categories": [
        "Setter-based",
        "Constructor-based",
        "Alternative to DI"
      ],
      "explanation": "According to slide 45: setter-based uses JavaBean properties, constructor-based uses constructor arguments. Service Lookup is named as the alternative to Dependency Injection."
    },
    {
      "type": "mc",
      "title": "Spring Targets",
      "context": null,
      "question": "Which statements about the targets of Spring are correct according to the lecture? (Multiple answers possible)",
      "options": [
        {
          "text": "Business objects are loosely coupled POJOs (Beans).",
          "isCorrect": true
        },
        {
          "text": "DAOs (middle-tier services) are also usable in standalone apps.",
          "isCorrect": true
        },
        {
          "text": "Spring integrates existing solutions such as o/r mapping tools and web frameworks.",
          "isCorrect": true
        },
        {
          "text": "Business objects must inherit from a special Spring base class to work.",
          "isCorrect": false
        },
        {
          "text": "Beans can only be used inside a web server, never in unit tests.",
          "isCorrect": false
        }
      ],
      "explanation": "According to slides 41-42: business objects are loosely coupled POJOs/Beans, reusable as normal Java objects e.g. in unit tests; middle-tier services (DAOs) are also usable in standalone apps; Spring integrates existing solutions (o/r mapping, web frameworks, remoting)."
    },
    {
      "type": "categorize",
      "title": "Architecture Tiers",
      "context": null,
      "question": "Match the components to the correct application context or tier in the Spring web architecture.",
      "items": [
        {
          "text": "Controllers",
          "category": "Web MVC Application Context (Web Tier)"
        },
        {
          "text": "Views",
          "category": "Web MVC Application Context (Web Tier)"
        },
        {
          "text": "Mappings",
          "category": "Web MVC Application Context (Web Tier)"
        },
        {
          "text": "Business Objects",
          "category": "Root Application Context (Middle Tier)"
        },
        {
          "text": "Data Access Objects",
          "category": "Root Application Context (Middle Tier)"
        },
        {
          "text": "Resources",
          "category": "Root Application Context (Middle Tier)"
        }
      ],
      "categories": [
        "Web MVC Application Context (Web Tier)",
        "Root Application Context (Middle Tier)"
      ],
      "explanation": "According to slide 43: the Web MVC Application Context (Web Tier) contains Controllers, Views, Mappings; the Root Application Context (Middle Tier) contains Business Objects, Data Access Objects and Resources."
    },
    {
      "type": "fill-blank",
      "title": "Bean Definition XML",
      "context": "From applicationContext.xml (simpleblog example).",
      "question": "Complete the XML bean definition from applicationContext.xml that creates an object blogEntryDAO of the class MemoryBlogEntryDAOImpl in the application context.",
      "template": "<bean {{0}}=\"blogEntryDAO\" {{1}}=\"simpleblog.dao.MemoryBlogEntryDAOImpl\" />",
      "blanks": [
        {
          "accept": [
            "id"
          ]
        },
        {
          "accept": [
            "class"
          ]
        }
      ],
      "explanation": "According to slide 47, a bean is defined via the <bean> element with the attributes id (name) and class (fully qualified class)."
    },
    {
      "type": "code-find-bug",
      "title": "Service Lookup Bug",
      "context": null,
      "question": "In this init() method, a bean is supposed to be retrieved from the application context via Service Lookup. Click the faulty line.",
      "language": "java",
      "codeLines": [
        "WebApplicationContext context =",
        "    WebApplicationContextUtils.getWebApplicationContext(getServletContext());",
        "blogEntryDAO = (BlogEntryDAO) context.getInstance(\"blogEntryDAO\");"
      ],
      "buggyLines": [
        2
      ],
      "fix": "Instead of context.getInstance(\"blogEntryDAO\"), context.getBean(\"blogEntryDAO\") must be called.",
      "explanation": "According to slide 49, a bean is retrieved via context.getBean(\"...\"), not via a non-existent getInstance(...) method."
    },
    {
      "type": "open",
      "title": "Retrieve Bean",
      "context": "Complete: context.____(<name>)",
      "question": "With which method name does a servlet retrieve a previously configured object via Service Lookup from the (Web)ApplicationContext? Give only the method name.",
      "accept": [
        "getBean",
        "getBean()",
        "context.getBean"
      ],
      "sampleAnswer": "getBean",
      "explanation": "According to slide 49, the servlet calls context.getBean(<name>) to obtain the object from the application context."
    },
    {
      "type": "order",
      "title": "Model-2 to Spring IoC",
      "context": null,
      "question": "Put the steps of migrating from Model-2 to Spring IoC into the order intended by the lecture.",
      "items": [
        "Import all required libraries (Maven)",
        "Create the configuration file applicationContext.xml",
        "Add ContextLoaderListener to web.xml",
        "Change DAO implementations (no longer singletons)",
        "Change the servlet implementation / init() method"
      ],
      "explanation": "According to slide 50: first import the Maven libraries, then create applicationContext.xml, then add the ContextLoaderListener to web.xml, then adapt the DAO implementations, and finally change the servlet's init() method."
    },
    {
      "type": "mc",
      "title": "De-Singletonize DAO",
      "context": null,
      "question": "Which changes to a DAO implementation are necessary, according to the lecture, so that it is no longer a singleton? (Multiple answers possible)",
      "options": [
        {
          "text": "Make the constructor public.",
          "isCorrect": true
        },
        {
          "text": "Remove the one instance variable.",
          "isCorrect": true
        },
        {
          "text": "Remove the getInstance() method.",
          "isCorrect": true
        },
        {
          "text": "Declare the class as abstract.",
          "isCorrect": false
        },
        {
          "text": "Add a second getInstance() method with a parameter.",
          "isCorrect": false
        }
      ],
      "explanation": "According to slide 50: the constructor is made public, and the one instance variable as well as the getInstance() method are removed. Spring then takes over the wiring."
    },
    {
      "type": "fill-blank",
      "title": "web.xml Listener",
      "context": "Web application: loading the application context on startup.",
      "question": "Complete the web.xml configuration that loads the application context on startup: the name of the context-param and Spring's listener class.",
      "template": "<context-param>\n  <param-name>{{0}}</param-name>\n  <param-value>/WEB-INF/applicationContext.xml</param-value>\n</context-param>\n<listener>\n  <listener-class>\n    org.springframework.web.context.{{1}}\n  </listener-class>\n</listener>",
      "blanks": [
        {
          "accept": [
            "contextConfigLocation"
          ]
        },
        {
          "accept": [
            "ContextLoaderListener"
          ]
        }
      ],
      "explanation": "According to slide 46, the context-param contextConfigLocation specifies the path to the configuration, and the ContextLoaderListener is registered as the listener class."
    },
    {
      "type": "self-assess",
      "title": "Application Context Startup",
      "context": null,
      "question": "Describe how the application context in a Spring web application is filled on startup.",
      "answer": "The application context is filled with objects on startup based on a configuration. Predefined objects of the Spring framework read the configuration and initialize the application context. In the case of a web application this is handled by the ContextLoaderServlet or ContextLoaderListener. In web.xml, the context-param contextConfigLocation specifies the path to applicationContext.xml (e.g. /WEB-INF/applicationContext.xml), and the ContextLoaderListener is registered as a listener.",
      "explanation": "Self-assessment based on slide 46."
    },
    {
      "type": "code-find-bug",
      "title": "applicationContext.xml Bug",
      "context": null,
      "question": "This applicationContext.xml is supposed to define a bean. Click the faulty line.",
      "language": "xml",
      "codeLines": [
        "<beans xmlns=\"http://www.springframework.org/schema/beans\">",
        "  <bean id=\"blogEntryDAO\" className=\"simpleblog.dao.MemoryBlogEntryDAOImpl\" />",
        "</beans>"
      ],
      "buggyLines": [
        1
      ],
      "fix": "The attribute must be named class, not className: <bean id=\"blogEntryDAO\" class=\"simpleblog.dao.MemoryBlogEntryDAOImpl\" />.",
      "explanation": "According to slide 47, the class of a bean is specified via the class attribute, not via className."
    },
    {
      "type": "mc",
      "title": "It's all about choice",
      "context": null,
      "question": "Spring advertises with \"It's all about choice\". Which of the following mappings of area to integrated solutions match the lecture? (Multiple answers possible)",
      "options": [
        {
          "text": "Persistence: Spring JDBC, Hibernate, JDO, mybatis",
          "isCorrect": true
        },
        {
          "text": "Web frameworks: Spring Web MVC, Struts, WebWork, Tapestry",
          "isCorrect": true
        },
        {
          "text": "Remoting protocols: RMI, JAX-RPC, Hessian, Burlap",
          "isCorrect": true
        },
        {
          "text": "Persistence: RMI, Hessian, Burlap",
          "isCorrect": false
        },
        {
          "text": "Web frameworks: Hibernate, JDO, mybatis",
          "isCorrect": false
        }
      ],
      "explanation": "According to slide 42: persistence/JDBC -> Spring JDBC, Hibernate, JDO, mybatis; web -> Spring Web MVC, Struts, WebWork, Tapestry; remoting -> RMI, JAX-RPC, Hessian, Burlap."
    },
    {
      "type": "self-assess",
      "title": "Singleton vs. Spring Bean",
      "context": null,
      "question": "How does a DAO implemented as a singleton differ from a DAO managed as a Spring bean with respect to configuration, exchangeability, and testability?",
      "answer": "A singleton DAO configures and creates itself (e.g. private constructor, static getInstance() method, a single instance variable). The caller must know the concrete implementing class, which contradicts programming against interfaces. It is hard to exchange (e.g. against a test stub), cannot be managed in an object pool, and exchanging it forces a recompile and re-deploy. A Spring-managed DAO, by contrast, is a loosely coupled POJO/bean: it is configured and wired from the outside by the framework (Inversion of Control / Dependency Injection), does not know the source of its configuration, and programs against an interface. As a result it is easy to exchange (configuration in applicationContext.xml, e.g. against a MemoryBlogEntryDAOImpl stub), reusable as a normal Java object e.g. in unit tests, and can be reconfigured without a recompile/re-deploy.",
      "explanation": "Self-assessment: linking the drawbacks of singletons (slide 39) with the IoC/DI advantages of Spring (slides 41, 45)."
    },
    {
      "type": "open",
      "title": "Co-Administrator from Linz",
      "context": null,
      "question": "Which Spring administrator comes from Linz according to the lecture?",
      "accept": [
        "Jürgen Höller",
        "Juergen Höller",
        "Jürgen Hoeller",
        "Juergen Hoeller",
        "Höller",
        "Hoeller"
      ],
      "sampleAnswer": "Jürgen Höller",
      "explanation": "According to slide 40, the administrators are Rod Johnson and Jürgen Höller, with Jürgen Höller coming from Linz."
    },
    {
      "type": "categorize",
      "title": "Self- vs. external configuration",
      "context": null,
      "question": "Assign the statements according to whether they describe a self-configuring object (singleton style) or an object configured through Inversion of Control.",
      "items": [
        {
          "text": "Object creates itself via getInstance()",
          "category": "Self-configuration (singleton)"
        },
        {
          "text": "Caller knows the implementing class",
          "category": "Self-configuration (singleton)"
        },
        {
          "text": "Object is configured from the outside",
          "category": "Inversion of Control"
        },
        {
          "text": "Object doesn't know the source of its configuration",
          "category": "Inversion of Control"
        },
        {
          "text": "Framework controls configuration and lifecycle",
          "category": "Inversion of Control"
        }
      ],
      "categories": [
        "Self-configuration (singleton)",
        "Inversion of Control"
      ],
      "explanation": "According to slides 39 and 45: with IoC, objects don't configure themselves, get configured from the outside, and don't know the source of their configuration; with a singleton, the caller knows the implementing class and the object creates/manages itself."
    },
    {
      "type": "mc",
      "title": "MyBatis Basics",
      "context": null,
      "question": "What is MyBatis (formerly Apache iBatis) and what central task does it fulfill? (Multiple answers possible)",
      "options": [
        {
          "text": "An SQL mapper / persistence layer",
          "isCorrect": true
        },
        {
          "text": "A full O/R mapper that completely hides SQL like Hibernate",
          "isCorrect": false
        },
        {
          "text": "It outsources SQL code from the Java classes",
          "isCorrect": true
        },
        {
          "text": "It automates the creation of the row mapper code",
          "isCorrect": true
        },
        {
          "text": "It is available exclusively for .NET",
          "isCorrect": false
        }
      ],
      "explanation": "MyBatis is an SQL mapper (persistence layer) with the goals of outsourcing SQL from Java classes and automating the creation of the row mapper code. It is available for Java and .NET and also offers simple O/R mapping (lists from 1:n relations)."
    },
    {
      "type": "mc",
      "title": "Mapper Description Format",
      "context": null,
      "question": "In which format are the descriptions (mappers / mapping files) with the named SQL statements stored in MyBatis?",
      "options": [
        {
          "text": "XML",
          "isCorrect": true
        },
        {
          "text": "JSON",
          "isCorrect": false
        },
        {
          "text": "YAML",
          "isCorrect": false
        },
        {
          "text": "Java annotations in the DAO classes",
          "isCorrect": false
        }
      ],
      "explanation": "The mapping files (\"mappers\") are described in XML format and contain named SQL statements such as \"addBlogEntry\" = \"INSERT INTO …\"."
    },
    {
      "type": "fill-blank",
      "title": "Parameter Access Syntax",
      "context": "From the insert statement in BlogEntryMapper.xml.",
      "question": "Complete the syntax used in the mapping file to access the properties of the parameter bean (example: accessing the contents property).",
      "template": "insert into blogentries(contents, timestamp)\nvalues ({{0}}, #{timestamp})",
      "blanks": [
        {
          "accept": [
            "#{contents}",
            "#{ contents }"
          ]
        }
      ],
      "explanation": "With the syntax #{<name>}, MyBatis accesses the property values of the passed parameter bean, so here #{contents}."
    },
    {
      "type": "code-find-bug",
      "title": "select Statement Attribute",
      "context": null,
      "question": "In this select mapping, the column and property names match. Which line contains an error?",
      "language": "xml",
      "codeLines": [
        "<select id=\"getAllBlogEntries\" resultMap=\"BlogEntry\">",
        "  select id, contents, timestamp from blogentries order by timestamp",
        "</select>"
      ],
      "buggyLines": [
        0
      ],
      "fix": "When column and property names match, the attribute resultType=\"BlogEntry\" must be used instead of resultMap.",
      "explanation": "If the column and property names match, you use the resultType attribute. A resultMap is only needed when the names do NOT match."
    },
    {
      "type": "mc",
      "title": "namespace in the Mapper",
      "context": "<mapper namespace=\"hmf2.simpleblog.dao.mybatis.MybatisBlogEntryDAOImpl\">",
      "question": "What is the namespace attribute in the <mapper> element of the mapping file used for?",
      "options": [
        {
          "text": "It equals the DAOImpl class name and prevents name inconsistencies",
          "isCorrect": true
        },
        {
          "text": "It defines the database schema name",
          "isCorrect": false
        },
        {
          "text": "It sets the caching behavior",
          "isCorrect": false
        },
        {
          "text": "It determines the table name for all statements",
          "isCorrect": false
        }
      ],
      "explanation": "The namespace equals the DAOImpl class name and serves to prevent name inconsistencies (e.g. ambiguity of statement IDs)."
    },
    {
      "type": "fill-blank",
      "title": "DAO selectOne/selectList",
      "context": "Methods of the MybatisBlogEntryDAOImpl class.",
      "question": "Complete the SqlSession method calls in the DAO implementation: one method returns a single object, the other a list.",
      "template": "public BlogEntry getBlogEntry(int id) {\n  return getSqlSession().{{0}}(\"….getBlogEntryById\", id);\n}\npublic List<BlogEntry> getAllBlogEntries() {\n  return getSqlSession().{{1}}(\"….getAllBlogEntries\");\n}",
      "blanks": [
        {
          "accept": [
            "selectOne"
          ]
        },
        {
          "accept": [
            "selectList"
          ]
        }
      ],
      "explanation": "For a single result you use selectOne, for a list of results selectList on the SqlSession object."
    },
    {
      "type": "mc",
      "title": "SqlSession Write Operations",
      "context": "public void updateBlogEntry(BlogEntry blogEntry) { … }",
      "question": "Which SqlSession method is called in the DAO implementation for an update statement?",
      "options": [
        {
          "text": "getSqlSession().update(\"….updateBlogEntry\", blogEntry)",
          "isCorrect": true
        },
        {
          "text": "getSqlSession().selectOne(\"….updateBlogEntry\", blogEntry)",
          "isCorrect": false
        },
        {
          "text": "getSqlSession().merge(\"….updateBlogEntry\", blogEntry)",
          "isCorrect": false
        },
        {
          "text": "getSqlSession().save(\"….updateBlogEntry\", blogEntry)",
          "isCorrect": false
        }
      ],
      "explanation": "For update statements, the DAO implementation calls getSqlSession().update(...); analogously there are insert() and delete()."
    },
    {
      "type": "order",
      "title": "MyBatis Workflow",
      "context": null,
      "question": "Put the first steps of the MyBatis workflow in the correct order (agile \"test first\").",
      "items": [
        "business objects",
        "DAO interface",
        "test methods (agile, test first)",
        "DB structure",
        "mapping file",
        "DAO implementation"
      ],
      "explanation": "The workflow follows the \"test first\" approach: first the business objects, then the DAO interface, then the test methods, after that the DB structure, the mapping file, and finally the DAO implementation (followed by config file, application context, and running the tests)."
    },
    {
      "type": "categorize",
      "title": "Config vs. Application Context",
      "context": null,
      "question": "Assign the entries according to whether they are defined in the mybatis-config.xml or in the Spring Application Context.",
      "items": [
        {
          "text": "typeAliases",
          "category": "mybatis-config.xml"
        },
        {
          "text": "mappers (reference to mapping files)",
          "category": "mybatis-config.xml"
        },
        {
          "text": "sqlSessionFactory (SqlSessionFactoryBean)",
          "category": "Application Context (Spring)"
        },
        {
          "text": "dataSource bean",
          "category": "Application Context (Spring)"
        },
        {
          "text": "sqlSession (SqlSessionTemplate)",
          "category": "Application Context (Spring)"
        },
        {
          "text": "blogEntryDAO bean",
          "category": "Application Context (Spring)"
        }
      ],
      "categories": [
        "mybatis-config.xml",
        "Application Context (Spring)"
      ],
      "explanation": "The mybatis-config.xml contains typeAliases and the mappers. The Spring Application Context defines the beans dataSource, sqlSessionFactory, sqlSession, and the DAO."
    },
    {
      "type": "self-assess",
      "title": "Result Map Purpose",
      "context": null,
      "question": "Explain when and why you have to use a <resultMap> instead of a simple resultType in MyBatis.",
      "answer": "A resultType is sufficient when the database column names exactly match the property names of the bean - MyBatis can then map automatically. A resultMap is needed when column and property names do NOT match (e.g. column user_id to property id, user_name to username). In the resultMap you define the mapping of column to property explicitly with <id> and <result>. resultMaps are also used for more complex mappings such as hasOne (<association>) and hasMany (<collection>) relations.",
      "explanation": "If the column and property names do not match, an explicit mapping via a resultMap is necessary."
    },
    {
      "type": "categorize",
      "title": "n+1 vs. join",
      "context": null,
      "question": "Assign the properties to the two variants of resolving hasOne/hasMany.",
      "items": [
        {
          "text": "needs 1 select for all blog entries plus n selects for the authors",
          "category": "n+1 (multiple selects)"
        },
        {
          "text": "needs little memory, but is slower",
          "category": "n+1 (multiple selects)"
        },
        {
          "text": "uses <association> with the select attribute",
          "category": "n+1 (multiple selects)"
        },
        {
          "text": "fetches all information in one big result",
          "category": "join (one select)"
        },
        {
          "text": "needs more memory, but is faster",
          "category": "join (one select)"
        },
        {
          "text": "uses a left join in the SQL statement",
          "category": "join (one select)"
        }
      ],
      "categories": [
        "n+1 (multiple selects)",
        "join (one select)"
      ],
      "explanation": "The n+1 solution runs 1+n selects (little memory, slower); the join variant fetches everything in one (left) join (more memory, faster)."
    },
    {
      "type": "fill-blank",
      "title": "hasOne association",
      "context": "BlogEntry hasOne Author (User), n+1 variant with a getAuthor select.",
      "question": "Complete the resultMap for the n+1 variant of a hasOne relationship: Which element binds in the Author object?",
      "template": "<resultMap id=\"blogEntryResult\" type=\"BlogEntry\">\n  <id property=\"id\" column=\"id\" />\n  <result property=\"contents\" column=\"contents\" />\n  <{{0}} property=\"author\" javaType=\"User\" select=\"getAuthor\" column=\"author_id\" />\n</resultMap>",
      "blanks": [
        {
          "accept": [
            "association"
          ]
        }
      ],
      "explanation": "For a hasOne relationship (the :1 side of an n:1 relation), you use the <association> element in the resultMap."
    },
    {
      "type": "fill-blank",
      "title": "hasMany collection",
      "context": "BlogEntry hasMany Comments, n+1 variant.",
      "question": "Complete the resultMap for a hasMany relationship: Which element binds in the list of Comments?",
      "template": "<resultMap id=\"blogEntryResult\" type=\"BlogEntry\">\n  …\n  <{{0}} property=\"comments\" javaType=\"ArrayList\" ofType=\"Comment\"\n    select=\"getComments\" column=\"id\" />\n</resultMap>",
      "blanks": [
        {
          "accept": [
            "collection"
          ]
        }
      ],
      "explanation": "For a hasMany relationship (the :n side of a 1:n relation), you use the <collection> element with the ofType attribute."
    },
    {
      "type": "mc",
      "title": "Circular References",
      "context": "people (id, name, friend_id) with rows (1, Hans, 2) and (2, Fred, 1)",
      "question": "Why can't MyBatis automatically resolve hasOne relationships with circular references (e.g. people with friend_id)?",
      "options": [
        {
          "text": "An infinite loop arises (Hans has friend Fred has friend Hans …)",
          "isCorrect": true
        },
        {
          "text": "The foreign-key column friend_id is syntactically invalid",
          "isCorrect": false
        },
        {
          "text": "MyBatis fundamentally does not support self-references in tables",
          "isCorrect": false
        },
        {
          "text": "The LRU cache overflows",
          "isCorrect": false
        }
      ],
      "explanation": "Circular references lead to an infinite loop when lazily loading. MyBatis cannot resolve this automatically; the solution is to load all records plus the friend_id and connect them manually in Java."
    },
    {
      "type": "self-assess",
      "title": "hasMany addComment Problem",
      "context": "public void addComment(BlogEntry blogEntry, Comment comment);",
      "question": "When adding a Comment to a BlogEntry, there is no single object that holds all the SQL parameters. Explain the problem and the solution shown in the slides.",
      "answer": "The problem: the insert statement needs both the Comment data (contents) and the blogentry_id. However, the Comment class has no property for blogentry_id, and there is no single object that bundles all the parameters together. Solution: use a HashMap/Map<String,Object> object as the parameter and put both the comment object and the blogEntryId into it (h.put(\"comment\", comment); h.put(\"blogEntryId\", blogEntry.getId())). In the mapping file, parameterType=\"java.util.Map\" is set and access uses nested properties such as #{comment.contents} and #{blogEntryId}. Afterwards the Comment is also added to the list in Java (blogEntry.getComments().add(comment)).",
      "explanation": "Since no single parameter object exists and Comment has no blogentry_id property, a HashMap is used as parameterType java.util.Map."
    },
    {
      "type": "fill-blank",
      "title": "Nested Property Access",
      "context": "BlogEntry with an author property (User); the insert takes author_id into account.",
      "question": "Complete the insert statement for a hasOne relationship: How do you access the nested id property of the author object?",
      "template": "insert into blogentries(id, contents, timestamp, author_id)\nvalues (#{id}, #{contents}, #{timestamp}, {{0}})",
      "blanks": [
        {
          "accept": [
            "#{author.id}",
            "#{ author.id }"
          ]
        }
      ],
      "explanation": "Nested parameter properties are accessed using dot notation, i.e. #{author.id} for the id of the author object."
    },
    {
      "type": "self-assess",
      "title": "m:n Relations Modeling",
      "context": null,
      "question": "Explain how an m:n relationship (e.g. BlogEntry and Tags) is resolved in MyBatis and why you should consider a \"full\" ORM for bidirectional m:n relationships.",
      "answer": "An m:n relationship is resolved into two relationships: m:n -> 1:m + n:1. Concretely: A hasMany R, B hasMany R, R hasOne A, R hasOne B. R represents the join table (e.g. blogentries_tags with blogentry_id, tag_id) and can additionally store information \"about\" the relation (who, when, ...). In Java you have, for example, a tagList property in BlogEntry and a blogEntryList property in Tag. Problem: with bidirectional m:n relationships, circular references can arise that MyBatis cannot resolve automatically. Therefore you should consider a \"full\" ORM such as Hibernate or JPA here.",
      "explanation": "m:n is decomposed via a relation class R (join table) into 1:m + n:1; with bidirectional relationships, circular references can arise, which is why a full ORM can make sense."
    },
    {
      "type": "mc",
      "title": "Lazy Loading",
      "context": null,
      "question": "What does Lazy Loading do in MyBatis and how is it enabled? (Multiple answers possible)",
      "options": [
        {
          "text": "It is an optimization of the ORM-type nested selects (n+1)",
          "isCorrect": true
        },
        {
          "text": "When loading a blog entry, the comments are not loaded immediately",
          "isCorrect": true
        },
        {
          "text": "Instead of the real objects, a proxy object is returned first",
          "isCorrect": true
        },
        {
          "text": "It is enabled via <setting name=\"lazyLoadingEnabled\" value=\"true\"/> in mybatis-config.xml",
          "isCorrect": true
        },
        {
          "text": "It is enabled via the attribute lazy=\"true\" directly in the select statement",
          "isCorrect": false
        }
      ],
      "explanation": "Lazy Loading optimizes the n+1 selects: a proxy is returned, and the associated data (e.g. comments) is only loaded on access. It is enabled via the lazyLoadingEnabled setting in mybatis-config.xml."
    },
    {
      "type": "open",
      "title": "Default Cache Size",
      "context": null,
      "question": "How many references to lists or objects does a MyBatis cache store by default (default value of size)?",
      "accept": [
        "1024",
        "1.024",
        "1,024"
      ],
      "sampleAnswer": "1024 – by default the cache stores 1024 references to lists or objects.",
      "explanation": "According to the MyBatis documentation, the cache stores 1024 references by default; the default eviction strategy is LRU."
    },
    {
      "type": "categorize",
      "title": "Choosing Eviction Strategies",
      "context": null,
      "question": "Match each eviction policy to the kind of data it is recommended for.",
      "items": [
        {
          "text": "long-living, read-only data (e.g. category tree)",
          "category": "LRU"
        },
        {
          "text": "read-write data, when changes don't happen too often",
          "category": "SOFT/WEAK"
        },
        {
          "text": "slowly aging data (e.g. statistical access counts)",
          "category": "FIFO"
        }
      ],
      "categories": [
        "LRU",
        "SOFT/WEAK",
        "FIFO"
      ],
      "explanation": "LRU is suited to long-living read-only data, SOFT/WEAK (garbage-collector-based) to read-write data, FIFO to slowly aging data such as statistics."
    },
    {
      "type": "mc",
      "title": "Default Cache Behavior",
      "context": null,
      "question": "Which statements correctly describe the default behavior of the MyBatis cache? (Multiple answers possible)",
      "options": [
        {
          "text": "All results from select statements are cached",
          "isCorrect": true
        },
        {
          "text": "insert, update and delete statements flush the cache",
          "isCorrect": true
        },
        {
          "text": "By default an LRU algorithm is used for eviction",
          "isCorrect": true
        },
        {
          "text": "By default the cache is flushed on a fixed time interval",
          "isCorrect": false
        },
        {
          "text": "The cache is treated as a read/write cache",
          "isCorrect": true
        }
      ],
      "explanation": "Default: all select results are cached, all write operations flush the cache, LRU eviction, read/write cache. By default there is NO time-based flushing (no flush interval)."
    },
    {
      "type": "code-find-bug",
      "title": "Enabling the Cache",
      "context": null,
      "question": "Caching should be enabled with default behavior within the mapping file. Which line is faulty?",
      "language": "xml",
      "codeLines": [
        "<mapper namespace=\"hmf2.simpleblog.dao.mybatis.MybatisBlogEntryDAOImpl\">",
        "  <caching enabled=\"true\" />",
        "  <select id=\"getAllBlogEntries\" resultType=\"BlogEntry\">",
        "    select id, contents, timestamp from blogentries",
        "  </select>",
        "</mapper>"
      ],
      "buggyLines": [
        1
      ],
      "fix": "Caching is enabled with the empty element <cache />, not with <caching enabled=\"true\" />.",
      "explanation": "According to the slides, you enable caching in the mapping file simply with <cache />. An element <caching enabled=\"true\" /> does not exist."
    },
    {
      "type": "mc",
      "title": "Model-2 Architecture",
      "context": null,
      "question": "What characterizes a 'Request Driven Web Framework' that implements a general model-2 architecture?",
      "options": [
        {
          "text": "You only have to add the application-specific code; the framework provides the general architecture.",
          "isCorrect": true
        },
        {
          "text": "You have to implement the entire HTTP stack including socket handling yourself.",
          "isCorrect": false
        },
        {
          "text": "The architecture is based on a purely client-side single-page application without a server.",
          "isCorrect": false
        },
        {
          "text": "Every application needs its own hand-written dispatcher.",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, the framework provides the general model-2 architecture; the developer only adds the application-specific code."
    },
    {
      "type": "mc",
      "title": "Dispatcher Servlet",
      "context": null,
      "question": "Which tasks does the generic 'dispatcher servlet' perform? (Multiple answers possible)",
      "options": [
        {
          "text": "It receives all incoming HTTP requests.",
          "isCorrect": true
        },
        {
          "text": "It forwards requests to 'handler' objects based on the URL.",
          "isCorrect": true
        },
        {
          "text": "It implements the 'front controller' design pattern.",
          "isCorrect": true
        },
        {
          "text": "It handles the persistent storage of the business data in the database.",
          "isCorrect": false
        },
        {
          "text": "It validates the input of the command bean.",
          "isCorrect": false
        }
      ],
      "explanation": "The dispatcher servlet receives all incoming HTTP requests and forwards them to handler objects based on the URL; it implements the front controller pattern."
    },
    {
      "type": "open",
      "title": "Design Pattern Name",
      "context": null,
      "question": "What is the name of the design pattern by which the generic dispatcher servlet centrally receives and forwards all incoming requests?",
      "accept": [
        "front controller",
        "Front Controller",
        "front-controller",
        "Frontcontroller",
        "Front Controller Pattern",
        "front controller pattern",
        "front controller design pattern"
      ],
      "sampleAnswer": "Front Controller (design pattern)",
      "explanation": "The slide explicitly names the 'front controller' design pattern for the central dispatcher servlet."
    },
    {
      "type": "self-assess",
      "title": "Handler Object Tasks",
      "context": null,
      "question": "Explain which tasks a 'handler object' (also called 'action' or 'controller') performs in a Request Driven Framework.",
      "answer": "A handler object (also called action or controller) validates the input, interacts with the business objects, manipulates the session, prepares the model and calls the view. It has to be implemented application-specifically, whereas the dispatcher servlet is provided generically by the framework.",
      "explanation": "The slide lists the typical responsibilities of the handler object."
    },
    {
      "type": "categorize",
      "title": "Mapping Objects",
      "context": null,
      "question": "Match the objects involved to their description according to the slide.",
      "items": [
        {
          "text": "validator (validates the command bean)",
          "category": "Validation"
        },
        {
          "text": "validation errors holder (stores validation errors)",
          "category": "Validation"
        },
        {
          "text": "command (bean containing incoming request parameters)",
          "category": "Data/Input"
        },
        {
          "text": "model (data passed to the view for rendering)",
          "category": "View/Output"
        },
        {
          "text": "view reference (URL, i.e. symbolic name, e.g. of a JSP)",
          "category": "View/Output"
        }
      ],
      "categories": [
        "Validation",
        "Data/Input",
        "View/Output"
      ],
      "explanation": "The slide describes each object involved with exactly this function: validator and validation errors holder belong to validation, command to input, model and view reference to output."
    },
    {
      "type": "mc",
      "title": "Interceptor",
      "context": null,
      "question": "What is the purpose of an 'interceptor' in a request-driven framework?",
      "options": [
        {
          "text": "It can interrupt the execution of the controller, e.g. to check access rights.",
          "isCorrect": true
        },
        {
          "text": "It exclusively stores the validation errors of the command bean.",
          "isCorrect": false
        },
        {
          "text": "It renders the view and writes it to the response stream.",
          "isCorrect": false
        },
        {
          "text": "It defines the URL mapping for all controller methods.",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, an interceptor can interrupt the execution of the controller, e.g. to check access rights."
    },
    {
      "type": "open",
      "title": "Command Bean",
      "context": null,
      "question": "What is the name of the object (a bean) that holds the incoming request parameters?",
      "accept": [
        "command",
        "command bean",
        "Command",
        "Command Bean"
      ],
      "sampleAnswer": "command (or command bean): a bean that contains the incoming request parameters.",
      "explanation": "The slide refers to the bean containing the incoming request parameters as 'command'."
    },
    {
      "type": "self-assess",
      "title": "Ambiguity of 'model'",
      "context": null,
      "question": "According to the CAVEAT slide, what is the ambiguity of the term 'model'? Name and distinguish the two meanings.",
      "answer": "The term 'model' is used ambiguously. Meaning 1: the name of the persistence layer. Meaning 2: the data passed from the controller to the view to be displayed. You have to infer from the context which of the two meanings is intended.",
      "explanation": "The slide explicitly warns that 'model' can refer to two different things."
    },
    {
      "type": "mc",
      "title": "DispatcherServlet Configuration",
      "context": "<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>",
      "question": "Where and how is the SpringMVC front controller servlet (DispatcherServlet) configured?",
      "options": [
        {
          "text": "It is implemented by the framework and must be configured in the web.xml.",
          "isCorrect": true
        },
        {
          "text": "It has to be fully implemented by the developer from scratch.",
          "isCorrect": false
        },
        {
          "text": "It is activated exclusively through an application.properties file.",
          "isCorrect": false
        },
        {
          "text": "It requires no configuration at all and is detected automatically.",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, the DispatcherServlet is implemented by the framework, receives all requests, and must be configured in the web.xml."
    },
    {
      "type": "fill-blank",
      "title": "Web Application Context",
      "context": "Every dispatcher servlet has its own web application context with bean definitions.",
      "question": "Complete the slide's statement about the file naming convention for the 'web application context' of a dispatcher servlet.",
      "template": "Dateinamenskonvention: <servlet-name>-{{0}}.xml",
      "blanks": [
        {
          "accept": [
            "servlet"
          ]
        }
      ],
      "explanation": "The slide gives the file naming convention <servlet-name>-servlet.xml."
    },
    {
      "type": "fill-blank",
      "title": "Annotation-based Config",
      "context": "File <servlet-name>-servlet.xml, simplest annotation-based configuration.",
      "question": "Complete the two XML elements that enable the annotation-based configuration of the dispatcher servlet and scan for annotated controllers.",
      "template": "<mvc:{{0}} />\n<context:{{1}} base-package=\"im430.springmvc\" />",
      "blanks": [
        {
          "accept": [
            "annotation-driven",
            "annotationdriven"
          ]
        },
        {
          "accept": [
            "component-scan",
            "componentscan"
          ]
        }
      ],
      "explanation": "The slide shows <mvc:annotation-driven /> and <context:component-scan base-package=\"...\" /> as the minimal configuration."
    },
    {
      "type": "mc",
      "title": "Controller Annotations",
      "context": null,
      "question": "Which statements about the controller annotations in SpringMVC are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "@Controller defines an arbitrary class as a controller.",
          "isCorrect": true
        },
        {
          "text": "@RequestMapping maps a URL to the controller.",
          "isCorrect": true
        },
        {
          "text": "@RequestMapping defines the persistence layer of the application.",
          "isCorrect": false
        },
        {
          "text": "@Controller automatically creates the database tables for the model.",
          "isCorrect": false
        }
      ],
      "explanation": "@Controller defines an arbitrary class as a controller, @RequestMapping maps a URL to the controller or the method."
    },
    {
      "type": "code-find-bug",
      "title": "PathVariable Bug",
      "context": "A URL template pattern is expected, as in '/hello/Josef', where 'name' is read from the URL.",
      "question": "In this controller example, a part of the URL should be used as a method parameter. Which line contains the bug?",
      "language": "java",
      "codeLines": [
        "@RequestMapping(value=\"/{name}\", method=RequestMethod.GET)",
        "public void helloName(@RequestParam String name,",
        "                      Writer out) throws IOException {",
        "  out.write(\"Hello \"+name);",
        "}"
      ],
      "buggyLines": [
        1
      ],
      "fix": "Instead of @RequestParam, @PathVariable must be used to bind the URL template part {name}.",
      "explanation": "To bind part of the URL as a parameter, the @PathVariable annotation is needed, not @RequestParam. @RequestParam reads query parameters such as ?name=Josef."
    },
    {
      "type": "mc",
      "title": "RequestParam Required",
      "context": null,
      "question": "What applies by default to a method parameter annotated with @RequestParam?",
      "options": [
        {
          "text": "It is required by default; for optional parameters you set required=false.",
          "isCorrect": true
        },
        {
          "text": "It is optional by default; for mandatory parameters you set required=true.",
          "isCorrect": false
        },
        {
          "text": "It always reads part of the URL path, not a query parameter.",
          "isCorrect": false
        },
        {
          "text": "It can only be used in combination with @ResponseBody.",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, @RequestParam is 'required' by default; for optional parameters you have to set required=false."
    },
    {
      "type": "mc",
      "title": "ResponseBody",
      "context": "@RequestMapping(method = RequestMethod.GET)\n@ResponseBody\npublic String hello() { return \"Hello Spring\"; }",
      "question": "What is the effect of the @ResponseBody annotation on a controller method?",
      "options": [
        {
          "text": "The method can return the content as a String; an 'out' parameter is no longer needed.",
          "isCorrect": true
        },
        {
          "text": "The method must receive a Writer object as a parameter.",
          "isCorrect": false
        },
        {
          "text": "The return value is interpreted as a view name and resolved via the ViewResolver.",
          "isCorrect": false
        },
        {
          "text": "The method is called before all @RequestMapping methods.",
          "isCorrect": false
        }
      ],
      "explanation": "With @ResponseBody the HTML can be returned as a String; an 'out' object as a parameter is no longer needed."
    },
    {
      "type": "fill-blank",
      "title": "Add Model Attribute",
      "context": "Parameter: org.springframework.ui.Model model",
      "question": "Complete the controller code that passes a value to the model which the view can display via ${message}.",
      "template": "public void myControllerMethod(Model model) {\n  model.{{0}}(\"message\", \"Hello World!\");\n}",
      "blanks": [
        {
          "accept": [
            "addAttribute"
          ]
        }
      ],
      "explanation": "With model.addAttribute(name, value), arbitrary values are passed to the view."
    },
    {
      "type": "mc",
      "title": "Default Attribute Name",
      "context": null,
      "question": "Which attribute name is used in the model when you call addAttribute(new MyProduct()) without an explicit name?",
      "options": [
        {
          "text": "myProduct",
          "isCorrect": true
        },
        {
          "text": "MyProduct",
          "isCorrect": false
        },
        {
          "text": "my_product",
          "isCorrect": false
        },
        {
          "text": "product",
          "isCorrect": false
        }
      ],
      "explanation": "Without an explicit name, the lowercased class name is used as the attribute name, i.e. 'myProduct'."
    },
    {
      "type": "self-assess",
      "title": "@ModelAttribute Use Cases",
      "context": null,
      "question": "Explain the two use cases of the @ModelAttribute annotation according to the slide.",
      "answer": "Use case 1 (on a method): defines reference data for form creation, e.g. values of a lookup table to be used as options for a select box. @ModelAttribute methods are called before the @RequestMapping methods; the return value is used as a model attribute (naming convention: method name, or an explicit name @ModelAttribute(\"...\")). Use case 2 (on a method parameter): sets/gets 'command-objects' from a web form. Command objects are beans whose properties resemble the form input fields; the attribute name is taken by default from the class name (e.g. FormInput -> formInput).",
      "explanation": "The slide distinguishes @ModelAttribute on a method and on a method parameter."
    },
    {
      "type": "order",
      "title": "@ModelAttribute Order",
      "context": "Use case 1: @ModelAttribute on a method to provide reference data.",
      "question": "Put the steps of form preparation with @ModelAttribute (use case 1) into the correct order.",
      "items": [
        "The @ModelAttribute method is called before the @RequestMapping method",
        "The method produces the reference data (e.g. list of categories)",
        "The return value is stored as a model attribute (name e.g. 'categories')",
        "The @RequestMapping method is executed",
        "The view accesses the attribute (e.g. ${categories})"
      ],
      "explanation": "@ModelAttribute methods are called before the @RequestMapping methods; their return value ends up as an attribute in the model and is then available in the view."
    },
    {
      "type": "order",
      "title": "Form Processing",
      "context": "GET /simpleForm shows the form, POST /simpleSubmit processes the input.",
      "question": "Arrange the flow of form processing (simpleForm -> simpleSubmit) into the correct order.",
      "items": [
        "GET request to /simpleForm calls simpleForm(@ModelAttribute FormInput input)",
        "Default values are set (input.setName(\"Default Value\"))",
        "The form view simpleForm.jsp is displayed with the formInput",
        "The user submits the form via POST to /simpleSubmit",
        "simpleSubmit(@ModelAttribute FormInput input) reads the submitted values",
        "The result view simpleSubmit.jsp displays ${formInput.name}"
      ],
      "explanation": "First the GET method delivers the pre-populated form, the user submits it via POST, the submit method reads the values from the command bean, and then the result view is displayed."
    },
    {
      "type": "code-find-bug",
      "title": "XSS Protection JSP",
      "context": "Result view simpleSubmit.jsp; the escapeXml attribute should prevent XSS.",
      "question": "This result view should output the name safely and prevent XSS. Which line contains the bug?",
      "language": "xml",
      "codeLines": [
        "<%@ taglib uri=\"http://java.sun.com/jsp/jstl/core\" prefix=\"c\" %>",
        "Name: <c:out value=\"${formInput.name}\" escapeXml=\"false\" />"
      ],
      "buggyLines": [
        1
      ],
      "fix": "escapeXml must be set to \"true\" to prevent XSS.",
      "explanation": "To prevent XSS, escapeXml=\"true\" must be set. With escapeXml=\"false\" the value is output unescaped."
    },
    {
      "type": "fill-blank",
      "title": "Validation JSR 303",
      "context": "File: controller method simpleSubmit",
      "question": "Complete the code for validation (JSR 303): the annotation that initiates the validation of the bean, and the parameter type that holds the validation errors.",
      "template": "public String simpleSubmit(@{{0}} FormInput input, {{1}} errors) { ... }",
      "blanks": [
        {
          "accept": [
            "Valid"
          ]
        },
        {
          "accept": [
            "Errors",
            "org.springframework.validation.Errors"
          ]
        }
      ],
      "explanation": "@Valid initiates the validation; the additional parameter is of type org.springframework.validation.Errors."
    },
    {
      "type": "code-find-bug",
      "title": "Validation Constraint",
      "context": "The validity condition should be placed directly as an annotation on the bean property.",
      "question": "This command bean should declare a length constraint for 'name' (JSR 303). Which line is faulty?",
      "language": "java",
      "codeLines": [
        "public class FormInput {",
        "  @Size(min=2, Max=20)",
        "  private String name;",
        "  public String getName() { return name; }",
        "  public void setName(String name) { this.name = name; }",
        "}"
      ],
      "buggyLines": [
        1
      ],
      "fix": "The constraint parameter must be named 'max' (lowercase): @Size(min=2, max=20).",
      "explanation": "The correct annotation is @Size with min and max. The parameter must be written in lowercase as 'max', not 'Max'."
    },
    {
      "type": "mc",
      "title": "Default View Name",
      "context": "@RequestMapping(value=\"/myview\", method = RequestMethod.GET)\npublic void foo() { }",
      "question": "How is the view name determined when a controller method is void and returns nothing?",
      "options": [
        {
          "text": "By default, the view name is equal to the URL mapping (here 'myview').",
          "isCorrect": true
        },
        {
          "text": "The view name is always 'index' as long as nothing is returned.",
          "isCorrect": false
        },
        {
          "text": "No view is invoked at all, the response stays empty.",
          "isCorrect": false
        },
        {
          "text": "The view name is derived from the controller's class name.",
          "isCorrect": false
        }
      ],
      "explanation": "By default, the view name is equal to the URL mapping; via the ViewResolver this yields e.g. /WEB-INF/views/myview.jsp."
    },
    {
      "type": "self-assess",
      "title": "View Resolver Thymeleaf",
      "context": null,
      "question": "Explain how a view (Thymeleaf) is configured so that a controller can produce output with it.",
      "answer": "A controller can use a 'view' for creating output. To do so, you define a 'view resolver' as configuration for the dispatcher servlet (in dispatcher-servlet.xml). In the Thymeleaf example, a templateResolver (SpringResourceTemplateResolver) is defined, which specifies via prefix (e.g. /WEB-INF/views/) and suffix (e.g. .html) where the views can be found. In addition, a templateEngine (SpringTemplateEngine) is defined as a dependency that references the templateResolver, as well as a ThymeleafViewResolver that references the templateEngine. This way the framework finds the matching template file for a given view name, e.g. /WEB-INF/views/<name>.html.",
      "explanation": "The slides describe defining a view resolver in dispatcher-servlet.xml."
    },
    {
      "type": "categorize",
      "title": "Meanings of Model",
      "context": "The CAVEAT slide warns about the ambiguous use of the term 'model'.",
      "question": "Match the descriptions to the two meanings of the term 'model'.",
      "items": [
        {
          "text": "Name of the persistence layer",
          "category": "model = persistence layer"
        },
        {
          "text": "Data passed from the controller to the view",
          "category": "model = data for the view"
        },
        {
          "text": "Populated via model.addAttribute(name, value)",
          "category": "model = data for the view"
        },
        {
          "text": "Layer for persistent access to / storage of the business data",
          "category": "model = persistence layer"
        }
      ],
      "categories": [
        "model = persistence layer",
        "model = data for the view"
      ],
      "explanation": "Meaning 1 is the persistence layer; meaning 2 is the data passed from the controller to the view (e.g. populated via model.addAttribute)."
    },
    {
      "type": "open",
      "title": "Meaning of REST",
      "context": null,
      "question": "What does the abbreviation REST stand for? Give the spelled-out term.",
      "accept": [
        "REpresentational State Transfer",
        "Representational State Transfer"
      ],
      "sampleAnswer": "REpresentational State Transfer",
      "explanation": "According to the slide, REST stands for REpresentational State Transfer."
    },
    {
      "type": "mc",
      "title": "Origin of REST",
      "context": null,
      "question": "Who introduced REST, and in what context was it described?",
      "options": [
        {
          "text": "Roy Fielding, in his dissertation (2000)",
          "isCorrect": true
        },
        {
          "text": "Tim Berners-Lee, in the HTML specification (1991)",
          "isCorrect": false
        },
        {
          "text": "Gavin King, in the Hibernate project",
          "isCorrect": false
        },
        {
          "text": "Rod Johnson, in the Spring framework book",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, REST was described by Roy Fielding (one main contributor to the HTTP-RFC) in his dissertation from 2000."
    },
    {
      "type": "mc",
      "title": "REST Architecture",
      "context": null,
      "question": "How is REST characterized on the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "Architecture for distributed Hypermedia-Information Systems",
          "isCorrect": true
        },
        {
          "text": "A stateless API to work with resources",
          "isCorrect": true
        },
        {
          "text": "Very scalable architecture (e.g. caching)",
          "isCorrect": true
        },
        {
          "text": "A stateful session API with server-side session storage",
          "isCorrect": false
        }
      ],
      "explanation": "REST is an architecture for distributed Hypermedia-Information Systems, provides a stateless API to work with resources, and is considered very scalable (e.g. caching)."
    },
    {
      "type": "open",
      "title": "Resource Identification",
      "context": null,
      "question": "By what is each resource uniquely identified in REST? Give the three-letter abbreviation.",
      "accept": [
        "URI"
      ],
      "sampleAnswer": "URI (every resource is identified uniquely by a URI)",
      "explanation": "According to the slide, every resource is identified uniquely by a URI."
    },
    {
      "type": "categorize",
      "title": "REST Verbs Mapping",
      "context": null,
      "question": "Match each REST verb to its meaning according to the slide.",
      "items": [
        {
          "text": "GET – request existing resource",
          "category": "Read/Create"
        },
        {
          "text": "POST – create new resource",
          "category": "Read/Create"
        },
        {
          "text": "PUT – change existing resource",
          "category": "Change"
        },
        {
          "text": "PATCH – change parts of an existing resource",
          "category": "Change"
        },
        {
          "text": "DELETE – remove existing resource",
          "category": "Delete"
        }
      ],
      "categories": [
        "Read/Create",
        "Change",
        "Delete"
      ],
      "explanation": "GET requests an existing resource, POST creates a new one, PUT changes an existing one, PATCH changes parts of an existing one, and DELETE removes an existing resource."
    },
    {
      "type": "mc",
      "title": "PUT vs PATCH",
      "context": null,
      "question": "How do PUT and PATCH differ according to the slide?",
      "options": [
        {
          "text": "PUT changes an existing resource, PATCH changes only parts of an existing resource",
          "isCorrect": true
        },
        {
          "text": "PUT creates a new resource, PATCH deletes a resource",
          "isCorrect": false
        },
        {
          "text": "PUT changes only parts, PATCH changes the entire resource",
          "isCorrect": false
        },
        {
          "text": "PUT requests a resource, PATCH creates a new one",
          "isCorrect": false
        }
      ],
      "explanation": "PUT changes an existing resource (entirely), PATCH changes only parts of an existing resource."
    },
    {
      "type": "fill-blank",
      "title": "Number of REST Verbs",
      "context": "Slide: REST in a Nutshell",
      "question": "Complete the statement from the slide about the number of REST methods.",
      "template": "Zugriff auf Ressourcen erfolgt ueber eine von {{0}} Methoden (vgl. HTTP) – die REST-\"Verben\".",
      "blanks": [
        {
          "accept": [
            "fuenf",
            "5",
            "funf"
          ]
        }
      ],
      "explanation": "According to the slide, resources are accessed via one of five methods (cf. HTTP) – the REST \"verbs\"."
    },
    {
      "type": "mc",
      "title": "HTTP and REST",
      "context": null,
      "question": "Which statement about the relationship between HTTP and REST matches the slide?",
      "options": [
        {
          "text": "HTTP is a (partial – get, post) implementation of REST",
          "isCorrect": true
        },
        {
          "text": "REST is a complete implementation of HTTP",
          "isCorrect": false
        },
        {
          "text": "HTTP and REST are completely independent of each other",
          "isCorrect": false
        },
        {
          "text": "HTTP fully implements REST including all five verbs",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, HTTP is a partial implementation of REST (explicitly naming get, post in parentheses)."
    },
    {
      "type": "self-assess",
      "title": "Explain Stateless",
      "context": null,
      "question": "Explain what it means that REST is a stateless API, and why this property is relevant for scalability.",
      "answer": "REST is a stateless API: the server does not keep any client-specific session state between the individual requests. Each request contains all the information needed to access the resource, which is uniquely identified by a URI. This statelessness makes the architecture very scalable – for example, responses can be cached and requests can more easily be distributed across multiple servers, since no shared session state needs to be synchronized.",
      "explanation": "Stateless means the server does not have to keep any session state between requests; each request is self-contained, which facilitates caching and scaling."
    },
    {
      "type": "mc",
      "title": "Meaning of RestController",
      "context": null,
      "question": "What is the @RestController annotation a convenient combination of?",
      "options": [
        {
          "text": "@Controller with @ResponseBody for all methods",
          "isCorrect": true
        },
        {
          "text": "@Controller with @Autowired for all fields",
          "isCorrect": false
        },
        {
          "text": "@Component with @RequestMapping for all methods",
          "isCorrect": false
        },
        {
          "text": "@Entity with @ResponseBody for all properties",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, @RestController conveniently combines @Controller with @ResponseBody for all methods."
    },
    {
      "type": "fill-blank",
      "title": "Composing RestController",
      "context": "Slide: RestController",
      "question": "Complete the equation from the slides about the @RestController annotation.",
      "template": "@RestController = @{{0}} + @{{1}} (fuer alle Methoden)",
      "blanks": [
        {
          "accept": [
            "Controller"
          ]
        },
        {
          "accept": [
            "ResponseBody"
          ]
        }
      ],
      "explanation": "@RestController combines @Controller with @ResponseBody for all methods."
    },
    {
      "type": "mc",
      "title": "Delivering a REST Response",
      "context": null,
      "question": "How does a controller that implements a REST API typically deliver its content?",
      "options": [
        {
          "text": "Directly via @ResponseBody, typically not via view rendering",
          "isCorrect": true
        },
        {
          "text": "Via view rendering with a JSP page",
          "isCorrect": false
        },
        {
          "text": "Via a redirect to an HTML page",
          "isCorrect": false
        },
        {
          "text": "Exclusively via server-side template rendering",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, REST controllers typically deliver JSON, XML, or custom MediaType content not via view rendering, but directly via @ResponseBody."
    },
    {
      "type": "code-find-bug",
      "title": "RestController Annotation",
      "context": null,
      "question": "In this REST controller from the slides, one annotation is wrong. Click the faulty line.",
      "language": "java",
      "codeLines": [
        "@Controller",
        "public class SimpleBlogRESTController {",
        "",
        "    @Autowired",
        "    BlogEntryDAO blogEntryDAO;",
        "",
        "    @JsonView(BlogEntry.class)",
        "    @GetMapping(\"/blogentries\")",
        "    public List<BlogEntry> getAllBlogEntries() {",
        "        return blogEntryDAO.getAllBlogEntries();",
        "    }",
        "}"
      ],
      "buggyLines": [
        0
      ],
      "fix": "The class must be annotated with @RestController so that all methods deliver their return value directly via @ResponseBody (e.g. as JSON).",
      "explanation": "A REST API class that delivers JSON/XML directly via @ResponseBody must be annotated with @RestController, not @Controller. @RestController conveniently combines @Controller with @ResponseBody for all methods."
    },
    {
      "type": "fill-blank",
      "title": "Completing GetMapping",
      "context": "@RestController class SimpleBlogRESTController",
      "question": "Complete the mapping annotation in the controller method from the slides that delivers all blog entries via a GET request.",
      "template": "@JsonView(BlogEntry.class)\n@{{0}}(\"/blogentries\")\npublic List<BlogEntry> getAllBlogEntries() {\n    return blogEntryDAO.getAllBlogEntries();\n}",
      "blanks": [
        {
          "accept": [
            "GetMapping"
          ]
        }
      ],
      "explanation": "In the slide example, the method getAllBlogEntries() is annotated with @GetMapping(\"/blogentries\") and returns a List<BlogEntry>."
    },
    {
      "type": "mc",
      "title": "Using JsonView",
      "context": null,
      "question": "What is the annotation @JsonView(class) used for according to the slide? (Multiple answers possible)",
      "options": [
        {
          "text": "On a controller method: serialize the returned object to JSON",
          "isCorrect": true
        },
        {
          "text": "On an entity property: add that property to the serialization result",
          "isCorrect": true
        },
        {
          "text": "On a database column: create an index",
          "isCorrect": false
        },
        {
          "text": "On a class: automatically create the table structure",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, on a controller method @JsonView serializes the returned object to JSON, and on an entity property it adds that property to the serialization result."
    },
    {
      "type": "order",
      "title": "GET Request Flow",
      "context": "@RestController SimpleBlogRESTController with @GetMapping(\"/blogentries\")",
      "question": "Put the flow of a GET request to the REST controller from the slide example in the correct order.",
      "items": [
        "The client sends a GET request to the URI /blogentries",
        "The method getAllBlogEntries() annotated with @GetMapping(\"/blogentries\") is called",
        "The BlogEntryDAO returns the list of BlogEntry objects",
        "The returned object is serialized to JSON (via @JsonView/@ResponseBody)",
        "The JSON is sent directly as the response body to the client"
      ],
      "explanation": "A GET to /blogentries hits the mapped method, which loads the entries via the DAO; the returned object is serialized to JSON by @JsonView/@ResponseBody and delivered directly as the response body."
    },
    {
      "type": "open",
      "title": "JSON Library",
      "context": null,
      "question": "Which library or mechanism for creating JSON is named on the 'Creating JSON' slide (keyword: the @JsonView annotation)?",
      "accept": [
        "JacksonJsonViews",
        "Jackson",
        "JacksonJsonView",
        "Jackson Json Views"
      ],
      "sampleAnswer": "JacksonJsonViews (Jackson)",
      "explanation": "The 'Creating JSON' slide names JacksonJsonViews as the mechanism for creating JSON."
    },
    {
      "type": "self-assess",
      "title": "View Rendering vs ResponseBody",
      "context": null,
      "question": "How does the output of a classic controller (view rendering) differ from that of a @RestController, and what role does @ResponseBody play in this?",
      "answer": "A classic @Controller typically delivers its content via view rendering: the return value is interpreted as the name/model of a view, which is then rendered to HTML (e.g. as a JSP). A @RestController, on the other hand, delivers JSON, XML, or a custom MediaType directly via @ResponseBody, with no view rendering taking place; instead, the returned value is serialized directly into the HTTP response body (e.g. to JSON). @RestController is exactly the convenient combination of @Controller and @ResponseBody for all methods, so you do not have to specify @ResponseBody on each individual method.",
      "explanation": "A classic controller renders a view (e.g. JSP); a @RestController writes the return value directly as data (JSON/XML/MediaType) into the response body via @ResponseBody."
    },
    {
      "type": "mc",
      "title": "Custom MediaType",
      "context": null,
      "question": "Which content formats can a controller that implements a REST API deliver according to the slide? (Multiple answers possible)",
      "options": [
        {
          "text": "JSON",
          "isCorrect": true
        },
        {
          "text": "XML",
          "isCorrect": true
        },
        {
          "text": "custom MediaType",
          "isCorrect": true
        },
        {
          "text": "exclusively pre-rendered HTML views",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, REST controllers deliver JSON, XML, or custom MediaType content."
    },
    {
      "type": "mc",
      "title": "Spring Boot",
      "context": null,
      "question": "Which statements about Spring Boot are true according to the slide? (Multiple answers possible)",
      "options": [
        {
          "text": "Creates stand-alone Spring applications",
          "isCorrect": true
        },
        {
          "text": "Provides starter poms to simplify configuration",
          "isCorrect": true
        },
        {
          "text": "Embeds Tomcat directly",
          "isCorrect": true
        },
        {
          "text": "Mandatorily requires extensive XML configuration",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, Spring Boot is an extension of the Spring Framework, creates stand-alone applications, provides starter poms, auto-configures Spring (no XML needed), and embeds Tomcat directly."
    },
    {
      "type": "open",
      "title": "ORM Abbreviation",
      "context": null,
      "question": "What is the name (abbreviation) of the technique that stores object-oriented objects in a relational database and that Hibernate implements?",
      "accept": [
        "ORM",
        "O/R Mapping",
        "O/R mapping",
        "Object-Relational Mapping",
        "Object Relational Mapping"
      ],
      "sampleAnswer": "ORM (Object-Relational Mapping)",
      "explanation": "According to the slide, Hibernate is an object-relational mapping (ORM) tool."
    },
    {
      "type": "mc",
      "title": "Hibernate and JPA",
      "context": null,
      "question": "Which statement about the relationship between Hibernate and JPA is true according to the slide?",
      "options": [
        {
          "text": "JPA is an interface for ORM libraries; Hibernate is an implementation of it",
          "isCorrect": true
        },
        {
          "text": "Hibernate is an interface; JPA is the only implementation of it",
          "isCorrect": false
        },
        {
          "text": "JPA and Hibernate are identical, interchangeable names for the same tool",
          "isCorrect": false
        },
        {
          "text": "JPA fully replaces Hibernate, so no ORM tool is needed anymore",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, JPA (Java Persistency API) is an interface for ORM libraries; Hibernate is an implementation of it (and adds custom functionality), and alternative implementations such as TopLink exist."
    },
    {
      "type": "categorize",
      "title": "Hibernate Object States",
      "context": "Hibernate: foundations – four states",
      "question": "Match the Hibernate object states to their respective description according to the slide.",
      "items": [
        {
          "text": "Not stored in the DB, no primary key",
          "category": "transient"
        },
        {
          "text": "Stored in the DB, lives in the persistence context",
          "category": "persistent"
        },
        {
          "text": "Stored in the DB, but no connection to the DB / session",
          "category": "detached"
        },
        {
          "text": "Marked as to be removed, will be deleted at the next synchronization",
          "category": "removed"
        }
      ],
      "categories": [
        "transient",
        "persistent",
        "detached",
        "removed"
      ],
      "explanation": "An object can be transient (not stored in the DB), persistent (stored in the DB), detached (stored, but with no connection to the DB), or removed (about to be removed)."
    },
    {
      "type": "order",
      "title": "Hibernate Object Life Cycle",
      "context": "Hibernate Object Life Cycle",
      "question": "Put the states of a Hibernate object in the typical order of its life cycle from creation to deletion.",
      "items": [
        "transient (newly created, not in DB)",
        "persistent (stored in DB, in the persistence context)",
        "detached (stored, but disconnected from the session)",
        "removed (marked as to be removed)"
      ],
      "explanation": "A newly created object is transient, becomes persistent when stored, can be detached after the transaction ends, and is finally marked as removed."
    },
    {
      "type": "mc",
      "title": "Persistence Context",
      "context": null,
      "question": "What is the persistence context according to the slide?",
      "options": [
        {
          "text": "A cache for persistent objects managed by the Hibernate session",
          "isCorrect": true
        },
        {
          "text": "An XML configuration file for the database connection",
          "isCorrect": false
        },
        {
          "text": "A separate table in the relational database",
          "isCorrect": false
        },
        {
          "text": "A pool of the web server's HTTP sessions",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, the persistence context is a cache for persistent objects, managed by the Hibernate session; only the first read access requires a DB query, while further reads return the same reference of the cached object."
    },
    {
      "type": "mc",
      "title": "CrudRepository",
      "context": null,
      "question": "Which statements about Spring Boot's generic CrudRepository are true according to the slide? (Multiple answers possible)",
      "options": [
        {
          "text": "Extending it creates a ready-made JPA implementation",
          "isCorrect": true
        },
        {
          "text": "It provides methods such as save(), findById(), findAll(), count(), and deleteById()",
          "isCorrect": true
        },
        {
          "text": "Read operations are configured as readonly",
          "isCorrect": true
        },
        {
          "text": "You have to implement each method such as save() or findAll() yourself",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, extending the generic CrudRepository interface creates a ready-made JPA implementation with methods such as save(), findById(), findAll(), count(), and deleteById(); read operations are configured as readonly."
    },
    {
      "type": "mc",
      "title": "JPA Lazy/Eager Defaults",
      "context": null,
      "question": "Which default fetch strategies does the JPA specification define according to the slide? (Multiple answers possible)",
      "options": [
        {
          "text": "@OneToMany is LAZY by default",
          "isCorrect": true
        },
        {
          "text": "@ManyToOne is EAGER by default",
          "isCorrect": true
        },
        {
          "text": "@ManyToMany is LAZY by default",
          "isCorrect": true
        },
        {
          "text": "@OneToOne is LAZY by default",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, OneToMany is LAZY, ManyToOne is EAGER, ManyToMany is LAZY, and OneToOne is EAGER."
    },
    {
      "type": "self-assess",
      "title": "Lazy Loading & View",
      "context": null,
      "question": "Explain the problem with lazy loading a collection that is only rendered later in the view (JSP), and which solutions the slide names.",
      "answer": "With lazy loading, a collection (e.g. the Comments of a BlogEntry) is only read from the DB on access. Problem: the Hibernate session has already ended with the DAO function. If the BlogEntry is then forwarded to the JSP page and the JSP wants to render the Comments list, loading it on access is no longer possible, since no session/connection exists anymore. Solutions according to the slide: if the collection is displayed together with the object, is dependent on it, and is 'reasonable big' (about a dozen elements that have to be loaded anyway), you should use eager load. If the collection is bigger than that, you should use paged lists (which require a custom query).",
      "explanation": "When a collection is loaded lazily via the DAO and the Hibernate session ends with the DAO function, the collection can no longer be loaded on access in the JSP; the slide suggests eager load for small collections displayed together, and paged lists for larger ones."
    },
    {
      "type": "categorize",
      "title": "Inheritance Strategies",
      "context": "Hibernate & Class Inheritance: 3 Strategies",
      "question": "Match each Hibernate inheritance strategy to its respective drawback according to the slide.",
      "items": [
        {
          "text": "Drawback: no / complex polymorphic queries",
          "category": "table per concrete class"
        },
        {
          "text": "Drawback: columns must be nullable",
          "category": "table per class hierarchy"
        },
        {
          "text": "Advantage: most efficient implementation without joins",
          "category": "table per class hierarchy"
        },
        {
          "text": "Drawback: join needed to retrieve the objects",
          "category": "table per class"
        },
        {
          "text": "Advantage: required values can be managed as 'not nullable'",
          "category": "table per class"
        }
      ],
      "categories": [
        "table per concrete class",
        "table per class hierarchy",
        "table per class"
      ],
      "explanation": "table per concrete class has the drawback of no/complex polymorphic queries; table per class hierarchy requires nullable columns; table per class requires a join to retrieve the objects."
    },
    {
      "type": "fill-blank",
      "title": "Single Table Strategy",
      "context": "Base class Item, strategy 'table per class hierarchy'",
      "question": "Complete the annotation for the 'table per class hierarchy' inheritance strategy from the slide example of the base class Item.",
      "template": "@Entity\n@Inheritance(strategy = InheritanceType.{{0}})",
      "blanks": [
        {
          "accept": [
            "SINGLE_TABLE",
            "SINGLE TABLE"
          ]
        }
      ],
      "explanation": "For 'table per class hierarchy' you use @Inheritance(strategy=InheritanceType.SINGLE_TABLE), whereas 'table per class' uses InheritanceType.JOINED."
    },
    {
      "type": "code-find-bug",
      "title": "Bidirectional m:n",
      "context": "Entity BlogEntry, inverse side of the m:n relation to Tag",
      "question": "This excerpt from the entity class BlogEntry (m:n to Tag) contains an error in the mapping annotation according to the slide example. Click the faulty line.",
      "language": "java",
      "codeLines": [
        "private Set<Tag> tags;",
        "",
        "@ManyToMany(mappedBy = \"blogEntries\")",
        "@JoinTable(name = \"blogentries_tags\")",
        "public Set<Tag> getTags() {",
        "    if (this.tags == null) { this.tags = new HashSet<Tag>(); }",
        "    return tags;",
        "}"
      ],
      "buggyLines": [
        3
      ],
      "fix": "The @JoinTable line must be removed: the DB information (@JoinTable) belongs only on the other (owning) side, otherwise the relation is created twice in the DB.",
      "explanation": "In a bidirectional m:n relation, only ONE side may carry the DB information (@JoinTable); the other side references the owning side with mappedBy. In the slide example, BlogEntry is the inverse side and must use @ManyToMany(mappedBy=\"blogEntries\"), not @JoinTable again, otherwise the relation would be created twice in the DB."
    },
    {
      "type": "open",
      "title": "m:n Join Table",
      "context": null,
      "question": "In the m:n example (BlogEntries <-> Tags), what is the name of the additional table that stores the link? Give the table name from the slide.",
      "accept": [
        "blogentries_tags"
      ],
      "sampleAnswer": "blogentries_tags (join table with blogentry_id and tag_id)",
      "explanation": "According to the slide, the m:n relation is mapped via the join table blogentries_tags(blogentry_id, tag_id)."
    },
    {
      "type": "mc",
      "title": "Spring & Hibernate Session",
      "context": null,
      "question": "How does Spring connect the Hibernate session according to the slide, and what follows from this for DAO implementations?",
      "options": [
        {
          "text": "Spring always connects the session with the current transaction; when it ends, objects get detached – DAOs should use @Transactional",
          "isCorrect": true
        },
        {
          "text": "Spring keeps the session permanently open, independent of transactions",
          "isCorrect": false
        },
        {
          "text": "Spring creates a new, immediately committed session for every single DB operation",
          "isCorrect": false
        },
        {
          "text": "Spring mandatorily requires an XML configuration without transactions for sessions",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, Spring always connects the Hibernate session with the current transaction; when the transaction ends, the session ends and objects get detached. Therefore DAOs should use @Transactional and combine multiple operations on the same objects within one transaction (i.e. one method)."
    },
    {
      "type": "mc",
      "title": "Scala Characterization",
      "context": null,
      "question": "How is Scala characterized according to the slides, and in which environment does the language run? (Multiple answers possible)",
      "options": [
        {
          "text": "\"Object-Oriented Meets Functional\" - combines both paradigms",
          "isCorrect": true
        },
        {
          "text": "Runs on the JVM and can be integrated with Java",
          "isCorrect": true
        },
        {
          "text": "Functions are first-class objects",
          "isCorrect": true
        },
        {
          "text": "Scala is dynamically typed and does not compile to bytecode",
          "isCorrect": false
        },
        {
          "text": "Scala runs exclusively natively without a virtual machine",
          "isCorrect": false
        }
      ],
      "explanation": "Scala combines object orientation with functional programming ('Object-Oriented Meets Functional'), runs on the JVM and can be integrated with Java; functions are first-class objects."
    },
    {
      "type": "open",
      "title": "Creator of Scala",
      "context": null,
      "question": "Who developed Scala (first published in 2003, at the EPFL in Lausanne)?",
      "accept": [
        "Martin Odersky",
        "Odersky"
      ],
      "sampleAnswer": "Martin Odersky (EPFL Lausanne, first published 2003).",
      "explanation": "According to the slide, Scala was created by Martin Odersky at the EPFL (Lausanne) and first published in 2003."
    },
    {
      "type": "open",
      "title": "Meaning of REPL",
      "context": null,
      "question": "What does the abbreviation REPL stand for, which describes the interactive Scala \"interpreter\"? (English term)",
      "accept": [
        "read-evaluate-print-loop",
        "read eval print loop",
        "read-eval-print-loop",
        "read evaluate print loop"
      ],
      "sampleAnswer": "read-evaluate-print-loop - each line is compiled to bytecode in the background; in the IDE as a Scala Worksheet.",
      "explanation": "REPL stands for read-evaluate-print-loop; each line is compiled to bytecode in the background."
    },
    {
      "type": "categorize",
      "title": "val vs. var",
      "context": null,
      "question": "Match the statements correctly to the keywords val and var.",
      "items": [
        {
          "text": "declares constant values",
          "category": "val"
        },
        {
          "text": "declares variables that can be changed",
          "category": "var"
        },
        {
          "text": "should be used by default unless you really need to change the value",
          "category": "val"
        },
        {
          "text": "creates no setter method for a class field (read-only field)",
          "category": "val"
        },
        {
          "text": "allows the assigned value to be changed afterwards",
          "category": "var"
        }
      ],
      "categories": [
        "val",
        "var"
      ],
      "explanation": "val declares constant values (recommended as the default), var declares variables that can be changed; both must be initialized. For a class field, val creates a read-only field without a setter."
    },
    {
      "type": "mc",
      "title": "Common Types",
      "context": null,
      "question": "Which statements about the types in Scala are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "All types are classes - there are no primitive types",
          "isCorrect": true
        },
        {
          "text": "Any is the common supertype of all types",
          "isCorrect": true
        },
        {
          "text": "Unit corresponds to \"void\" and has only the value \"()\"",
          "isCorrect": true
        },
        {
          "text": "Int and Double are primitive types as in Java",
          "isCorrect": false
        },
        {
          "text": "Strings are based on java.lang.String, augmented by StringOps",
          "isCorrect": true
        }
      ],
      "explanation": "In Scala, all types are classes (no primitive types). Any is the common supertype, Unit corresponds to void with the single value (). Strings are based on java.lang.String, augmented by StringOps."
    },
    {
      "type": "fill-blank",
      "title": "Defining a Function",
      "context": "The function returns x when x >= 0, otherwise -x.",
      "question": "Complete the definition of a function abs that computes the absolute value of a Double. Fill in the keyword and the assignment symbol.",
      "template": "{{0}} abs(x: Double) {{1}} if (x >= 0) x else -x",
      "blanks": [
        {
          "accept": [
            "def"
          ]
        },
        {
          "accept": [
            "="
          ]
        }
      ],
      "explanation": "Functions are defined with def; the function body follows the assignment symbol =. The last expression becomes the return value."
    },
    {
      "type": "categorize",
      "title": "Function vs. Procedure",
      "context": null,
      "question": "Match the properties: is it a function or a procedure (a function with no return value)?",
      "items": [
        {
          "text": "The last expression of the block becomes the return value",
          "category": "Function"
        },
        {
          "text": "Returns no value - the \"=\" symbol is omitted",
          "category": "Procedure"
        },
        {
          "text": "The return type is Unit",
          "category": "Procedure"
        },
        {
          "text": "The return type can be omitted if not recursive",
          "category": "Function"
        },
        {
          "text": "Can alternatively be declared explicitly with return type Unit",
          "category": "Procedure"
        }
      ],
      "categories": [
        "Function",
        "Procedure"
      ],
      "explanation": "Functions return a value (the last expression after =) and the return type is optional for non-recursive functions. Procedures return no value; you omit the \"=\" and the return type is Unit."
    },
    {
      "type": "code-find-bug",
      "title": "String Interpolation",
      "context": null,
      "question": "In the following code, string interpolation should output the value of the variable name. Click the faulty line.",
      "language": "scala",
      "codeLines": [
        "val name = \"world\"",
        "println(s\"Hello $world\")"
      ],
      "buggyLines": [
        1
      ],
      "fix": "It must use $name instead of $world, since the variable is named name: println(s\"Hello $name\").",
      "explanation": "For interpolation, the string is prefixed with s and the variable name is marked with $. Here $world is used by mistake instead of $name, so the declared variable is not referenced."
    },
    {
      "type": "mc",
      "title": "Conditional Expression",
      "context": "val s = if (x > 0) 1 else -1",
      "question": "What holds for if/else constructs in Scala? (Multiple answers possible)",
      "options": [
        {
          "text": "if/else has a value - the expression that follows if or else",
          "isCorrect": true
        },
        {
          "text": "For if (x > 0) \"pos\" else -1, the common supertype is Any",
          "isCorrect": true
        },
        {
          "text": "if/else is a pure statement without a value, as in C",
          "isCorrect": false
        },
        {
          "text": "A non-existing else has the type String",
          "isCorrect": false
        },
        {
          "text": "Assignments have type Unit and can be chained (x = y = 1)",
          "isCorrect": false
        }
      ],
      "explanation": "In Scala, if/else constructs have a value (the expression that follows if or else). With mixed types like if (x > 0) \"pos\" else -1, the common supertype is Any; a missing else has type Unit with value ()."
    },
    {
      "type": "open",
      "title": "until vs. to",
      "context": null,
      "question": "Which keyword do you use in for loops to exclude the upper bound (e.g. for traversing arrays/strings)?",
      "accept": [
        "until"
      ],
      "sampleAnswer": "until - excludes the upper bound (as opposed to to, which includes it).",
      "explanation": "until excludes the upper bound, whereas to includes it. Example: for (i <- 0 until \"Hello\".size)."
    },
    {
      "type": "order",
      "title": "for with Guard",
      "context": "i and j each run from 1 to 3, and 10*i+j is printed, but only when i != j.",
      "question": "The loop for (i <- 1 to 3; j <- 1 to 3 if i != j) print(s\"${10*i+j} \") produces an output. Put the printed values into the correct order.",
      "items": [
        "12",
        "13",
        "21",
        "23",
        "31",
        "32"
      ],
      "explanation": "Two generators form nested loops; the guard if i != j skips pairs where i and j are equal. Result: 12 13 21 23 31 32."
    },
    {
      "type": "fill-blank",
      "title": "Comprehension with yield",
      "context": "The result should be vector(1, 2, 0).",
      "question": "Complete the for-comprehension that builds a collection of values in the loop. Which keyword is missing?",
      "template": "for (i <- 1 to 3) {{0}} i % 3",
      "blanks": [
        {
          "accept": [
            "yield"
          ]
        }
      ],
      "explanation": "With yield, a for-comprehension builds a collection of values; it is compatible with the first generator. for (i <- 1 to 3) yield i % 3 produces vector(1,2,0)."
    },
    {
      "type": "mc",
      "title": "Variable Arguments",
      "context": "def sum(args: Int*) = {var r = 0; for (a <- args) r += a; r}",
      "question": "How do you correctly call the function def sum(args: Int*) with an already existing sequence 1 to 5?",
      "options": [
        {
          "text": "sum(1 to 5: _*)",
          "isCorrect": true
        },
        {
          "text": "sum(1 to 5)",
          "isCorrect": false
        },
        {
          "text": "sum(Seq(1 to 5))",
          "isCorrect": false
        },
        {
          "text": "sum(1 to 5: *)",
          "isCorrect": false
        }
      ],
      "explanation": "An existing sequence cannot be passed directly (sum(1 to 5) produces an error). The suffix : _* tells the compiler to treat the sequence as a sequence of arguments."
    },
    {
      "type": "code-find-bug",
      "title": "Array Access",
      "context": null,
      "question": "The following code is supposed to create a two-element string array and change the first element. Click the faulty line.",
      "language": "scala",
      "codeLines": [
        "val s = Array(\"a\", \"b\")",
        "s[0] = \"z\""
      ],
      "buggyLines": [
        1
      ],
      "fix": "Element access must use parentheses: s(0) = \"z\".",
      "explanation": "In Scala you access array elements with parentheses (), not with square brackets []. Square brackets are reserved exclusively for generic type parameters."
    },
    {
      "type": "fill-blank",
      "title": "Map with Arrow Operator",
      "context": "Creates a Map with three key-value pairs.",
      "question": "Complete the Map declaration with the operator that, according to the slides, creates a pair and hints at the function mapping (\"easier on the eye\").",
      "template": "val age = Map(\"Darth\" {{0}} 45, \"Luke\" {{0}} 23, \"Han\" {{0}} 31)",
      "blanks": [
        {
          "accept": [
            "->"
          ]
        }
      ],
      "explanation": "The -> operator creates a pair (e.g. \"Luke\" -> 23) and is a more readable notation than the pair literal (\"Luke\", 23)."
    },
    {
      "type": "mc",
      "title": "Map Access getOrElse/get",
      "context": "val age = Map(\"Darth\" -> 45, \"Luke\" -> 23)",
      "question": "According to the slides, how can you safely access Map values without throwing an exception when a key does not exist? (Multiple answers possible)",
      "options": [
        {
          "text": "age.getOrElse(\"Luke\", 0)",
          "isCorrect": true
        },
        {
          "text": "age.get(\"Luke\") returns an Option object (Some or None)",
          "isCorrect": true
        },
        {
          "text": "if (age.contains(\"Luke\")) age(\"Luke\") else 0",
          "isCorrect": true
        },
        {
          "text": "age(\"Luke\") safely returns 0 when the key is missing",
          "isCorrect": false
        }
      ],
      "explanation": "age(\"Luke\") throws an exception when the key is missing. getOrElse returns a default; get returns an Option object (Some or None); contains checks for existence."
    },
    {
      "type": "self-assess",
      "title": "Companion Object",
      "context": null,
      "question": "Explain what a \"companion object\" is in Scala and why it is needed. Address static methods and the apply method.",
      "answer": "Scala has no static methods or fields like Java. Instead, you use a \"companion object\": an object (singleton) with the same name as the associated class, which must be declared in the same source file. The class and its companion object can access each other's private members. Companion objects commonly contain an apply method to create objects of the associated class - e.g. Array(1,2,3,4,5) without new. Singleton objects in general are defined with the object construct (no constructor parameters), and their constructor is called on first use.",
      "explanation": "Scala has no static methods/fields like Java. Companion objects take on this role and typically contain an apply method for creating objects."
    },
    {
      "type": "code-find-bug",
      "title": "Class Field",
      "context": null,
      "question": "The Person class is supposed to have an age field. Click the line that violates a Scala rule.",
      "language": "scala",
      "codeLines": [
        "class Person {",
        "  var age",
        "}"
      ],
      "buggyLines": [
        1
      ],
      "fix": "Every field must be initialized, e.g. var age = 0.",
      "explanation": "In Scala, according to the slide, every field must be initialized. var age without an initial value is invalid; the correct form is var age = 0."
    },
    {
      "type": "mc",
      "title": "Access Modifiers",
      "context": null,
      "question": "Which statements about access modifiers in Scala are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "Members are public by default",
          "isCorrect": true
        },
        {
          "text": "private is accessible only within the class that contains the member definition",
          "isCorrect": true
        },
        {
          "text": "protected is accessible only from subclasses",
          "isCorrect": true
        },
        {
          "text": "private[this] declares \"object-private\" fields that no other object of the class can access",
          "isCorrect": true
        },
        {
          "text": "Members are private by default as in Java",
          "isCorrect": false
        }
      ],
      "explanation": "Members are public by default. private is accessible only within the defining class, protected only from subclasses. private[this] declares object-private fields that no other object of the class can access."
    },
    {
      "type": "fill-blank",
      "title": "Primary Constructor",
      "context": "name should be readable from outside, age private and mutable.",
      "question": "Complete the primary constructor: name should become a public read-only field, age a private mutable field. Fill in the keywords.",
      "template": "class Person({{0}} name: String, private {{1}} age: Int) { }",
      "blanks": [
        {
          "accept": [
            "val"
          ]
        },
        {
          "accept": [
            "var"
          ]
        }
      ],
      "explanation": "Parameters right after the class name are turned into fields. val creates a read-only field, var a read/write field; modifiers such as private are possible."
    },
    {
      "type": "order",
      "title": "Layered Traits",
      "context": "Call: new SavingsAccount with ConsoleLogger with TimestampLogger with ShortLogger",
      "question": "With new SavingsAccount with ConsoleLogger with TimestampLogger with ShortLogger, the log methods are invoked in stages via super. Put the call chain into the correct order (the trait called first comes first).",
      "items": [
        "ShortLogger.log",
        "TimestampLogger.log",
        "ConsoleLogger.log"
      ],
      "explanation": "With layered traits, processing always starts with the last trait listed. The chain is therefore ShortLogger.log -> TimestampLogger.log -> ConsoleLogger.log."
    },
    {
      "type": "self-assess",
      "title": "Traits vs. Inheritance",
      "context": null,
      "question": "How do traits in Scala differ from plain class inheritance, and which problem from other languages do they solve? Also give the comparison to Java.",
      "answer": "Scala does not support multiple inheritance of classes, but it does support traits. Traits are comparable to Java interfaces, but can additionally contain concrete (implemented) methods as well as initialized fields. A class can implement multiple traits (syntax: class extends trait1 with trait2 with trait3 ...) and must implement all undeclared methods (no \"override\" needed) and initialize all uninitialized fields. Trait methods and fields are \"mixed in\". Traits can furthermore be added to individual objects on construction (val a = new SavingsAccount with ConsoleLogger) and can be layered, invoking each other via super.",
      "explanation": "Scala does not support multiple inheritance, but it does support traits. These resemble Java interfaces but can also contain concrete methods and initialized fields and be mixed in multiple times."
    },
    {
      "type": "code-find-bug",
      "title": "Application Object",
      "context": null,
      "question": "The following code is supposed to be a runnable Scala program whose entry point is the main method. Click the faulty line.",
      "language": "scala",
      "codeLines": [
        "object HelloWorld {",
        "  def main(args: String) {",
        "    println(\"Hello World!\")",
        "  }",
        "}"
      ],
      "buggyLines": [
        1
      ],
      "fix": "The parameter must be of type Array[String]: def main(args: Array[String]).",
      "explanation": "The entry point of a Scala program is the main method with the signature main(args: Array[String]). Here the parameter type is incorrectly String instead of Array[String]."
    },
    {
      "type": "mc",
      "title": "App Trait",
      "context": null,
      "question": "What does extending an object from the \"App\" trait (object HelloWorld extends App) do?",
      "options": [
        {
          "text": "You can place the code directly into the constructor body instead of writing a main method",
          "isCorrect": true
        },
        {
          "text": "It turns the object into an abstract class",
          "isCorrect": false
        },
        {
          "text": "It forces you to implement your own main method",
          "isCorrect": false
        },
        {
          "text": "It automatically starts a web server",
          "isCorrect": false
        }
      ],
      "explanation": "With extends App you can write the code directly into the constructor body instead of defining a main method."
    },
    {
      "type": "mc",
      "title": "Pattern Matching match",
      "context": null,
      "question": "Which statements about Scala's match expression (pattern matching) are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "There is no fallthrough - no break necessary",
          "isCorrect": true
        },
        {
          "text": "The match expression has a value",
          "isCorrect": true
        },
        {
          "text": "case _ serves as the default pattern",
          "isCorrect": true
        },
        {
          "text": "Type patterns are the preferred form over the isInstanceOf operator",
          "isCorrect": true
        },
        {
          "text": "As with switch in Java, a break must follow every case",
          "isCorrect": false
        }
      ],
      "explanation": "The match expression resembles switch but has no fallthrough (no break needed), has a value, and case _ serves as the default pattern. Type patterns are the preferred form over isInstanceOf."
    },
    {
      "type": "self-assess",
      "title": "Case Classes",
      "context": null,
      "question": "Explain what case classes are in Scala and which members or methods are automatically generated for them. What are they optimized for?",
      "answer": "Case classes are a special kind of class optimized for use in pattern matching (keyword: case class <name>). Each constructor parameter automatically becomes a val (unless explicitly declared as var). An apply method is provided for the companion object so that objects can be constructed without new, and an unapply method that makes pattern matching work. In addition, toString, equals, hashCode and copy are generated. Case classes cannot be inherited from (they are \"inheritance-tree-leafs\"); case objects are also allowed. They can match nested structures, which is useful for example in web applications when parsing JSON data.",
      "explanation": "Case classes are optimized for pattern matching. Constructor parameters become val; apply, unapply, toString, equals, hashCode and copy are generated."
    },
    {
      "type": "order",
      "title": "Pattern Matching Evaluation",
      "context": "arr match { ... }",
      "question": "When destructuring an array, the case branches are checked in order. Put the patterns in the order in which they are written in the slide example (from the most specific match to the default).",
      "items": [
        "case Array(0) => \"0\"",
        "case Array(x, y) => s\"$x , $y\"",
        "case Array(0, _*) => \"0, ...\"",
        "case _ => \"no match\""
      ],
      "explanation": "In the slide example the patterns are written in this order: Array(0), Array(x,y), Array(0, _*) and finally the default _."
    },
    {
      "type": "fill-blank",
      "title": "Extractor unapply",
      "context": null,
      "question": "For destructuring via an extractor to work, the object has to define a particular method. Complete the method name.",
      "template": "object Name { def {{0}}(input: String) = { ... } }",
      "blanks": [
        {
          "accept": [
            "unapply"
          ]
        }
      ],
      "explanation": "Extractors enable destructuring via the unapply() method, which returns either None or Some(...)."
    },
    {
      "type": "mc",
      "title": "Operators & Methods",
      "context": null,
      "question": "Which statements about methods and operators in Scala are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "a.method(b) and a method b are interchangeable",
          "isCorrect": true
        },
        {
          "text": "a + b is shorthand for a.+(b)",
          "isCorrect": true
        },
        {
          "text": "Operators such as + and - can be overloaded",
          "isCorrect": true
        },
        {
          "text": "There are no ++/-- operators - you use += 1 or -= 1 instead",
          "isCorrect": true
        },
        {
          "text": "1.to(10) cannot be written as 1 to 10",
          "isCorrect": false
        }
      ],
      "explanation": "a.method(b) and a method b are interchangeable; a + b is shorthand for a.+(b). Operators can be overloaded. There are no ++/-- operators - you use += 1 or -= 1 instead."
    },
    {
      "type": "self-assess",
      "title": "Inheritance override",
      "context": null,
      "question": "Explain the rules for overriding (override) and inheritance in Scala. In particular, address which fields can be overridden and which cannot.",
      "answer": "Scala uses the extends and final keywords like Java. When overriding a non-abstract method or a non-abstract field, the override modifier must be used. The keyword super is used to invoke the superclass, and only the primary constructor can call a superclass constructor. For overriding fields the following applies: a field consists of a private field plus accessor/mutator. val fields can be overridden (the subclass overrides the accessor), var fields cannot be overridden. For abstract classes (keyword abstract), one or more methods are not defined or one or more fields have no initial value; these must be provided by subclasses, and no override modifier is needed for that.",
      "explanation": "In Scala the override modifier is mandatory when overriding non-abstract methods/fields; val fields can be overridden, var fields cannot."
    },
    {
      "type": "categorize",
      "title": "Packages & Imports",
      "context": null,
      "question": "Assign the statements correctly to the topics \"Packages\" and \"Imports\".",
      "items": [
        {
          "text": "Serve to manage namespaces in large programs",
          "category": "Packages"
        },
        {
          "text": "There is no relationship between directory and package as in Java",
          "category": "Packages"
        },
        {
          "text": "Can be placed anywhere in the code, not just at the top of a file",
          "category": "Imports"
        },
        {
          "text": "The wildcard \"_\" imports all members (instead of Java's *)",
          "category": "Imports"
        },
        {
          "text": "With { x => y } a member can be renamed when importing",
          "category": "Imports"
        },
        {
          "text": "Each of these can contain a package object for functions or variables",
          "category": "Packages"
        }
      ],
      "categories": [
        "Packages",
        "Imports"
      ],
      "explanation": "Packages manage namespaces and, in Scala, have no relationship to the directory. Imports use the wildcard _ instead of Java's *, can be placed anywhere, and can rename members."
    },
    {
      "type": "mc",
      "title": "Exceptions in Scala",
      "context": null,
      "question": "Which statements about exceptions in Scala (compared to Java) are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "There are no \"checked\" exceptions and no throws declaration on methods",
          "isCorrect": true
        },
        {
          "text": "Exception objects are subclasses of java.lang.Throwable",
          "isCorrect": true
        },
        {
          "text": "\"throw\" is an expression and has the special type \"Nothing\"",
          "isCorrect": true
        },
        {
          "text": "Catching exceptions is done via pattern matching with case",
          "isCorrect": true
        },
        {
          "text": "finally clauses are only executed if no exception was thrown",
          "isCorrect": false
        }
      ],
      "explanation": "Exceptions work the same way as in Java (subclasses of java.lang.Throwable), but there are no checked exceptions, no throws declaration, and no compile-time check. throw is an expression with the special type Nothing, and catching is done via pattern matching with case. finally clauses are executed regardless of whether an exception was thrown."
    },
    {
      "type": "fill-blank",
      "title": "Type Casts & Checks",
      "context": "Checks whether p is an Employee, and then casts it.",
      "question": "Complete the type check and the type cast in Scala with the appropriate method names.",
      "template": "if (p.{{0}}[Employee]) s = p.{{1}}[Employee]",
      "blanks": [
        {
          "accept": [
            "isInstanceOf"
          ]
        },
        {
          "accept": [
            "asInstanceOf"
          ]
        }
      ],
      "explanation": "isInstanceOf[T] checks the type, asInstanceOf[T] casts. The generic type parameters go in square brackets."
    },
    {
      "type": "open",
      "title": "Wildcard Character",
      "context": null,
      "question": "Which character is used in Scala as the wildcard for imports (equivalent to Java's *)?",
      "accept": [
        "_",
        "underscore",
        "the underscore",
        "underscore _"
      ],
      "sampleAnswer": "The underscore _ (e.g. import math._).",
      "explanation": "The wildcard character is the underscore _ (e.g. import math._ or import a.b._), which is equivalent to Java's *."
    },
    {
      "type": "mc",
      "title": "Underscore as Function Value",
      "context": "val f = math.ceil _\nf(3.9) // 4.0",
      "question": "What does the underscore do in the assignment val f = math.ceil _ ?",
      "options": [
        {
          "text": "It indicates that the function itself (as a value) is meant and is not called",
          "isCorrect": true
        },
        {
          "text": "It calls math.ceil immediately with the argument 0",
          "isCorrect": false
        },
        {
          "text": "It declares a placeholder for an implicit parameter",
          "isCorrect": false
        },
        {
          "text": "It turns math.ceil into a call-by-name function",
          "isCorrect": false
        }
      ],
      "explanation": "According to the slide, the underscore indicates that the function itself (as a value) is meant and is not called immediately. This way it can be stored in a variable and called later with f(...)."
    },
    {
      "type": "mc",
      "title": "map() Function",
      "context": "val names = List(\"Peter\", \"Paul\", \"Mary\")\nnames.map(_.toUpperCase)",
      "question": "What does the method map() do when applied to a collection?",
      "options": [
        {
          "text": "It applies a function to every element and returns a collection of the results",
          "isCorrect": true
        },
        {
          "text": "It filters out all elements for which the function returns false",
          "isCorrect": false
        },
        {
          "text": "It reduces the collection to a single value",
          "isCorrect": false
        },
        {
          "text": "It modifies the collection in-place without creating a new one",
          "isCorrect": false
        }
      ],
      "explanation": "map() applies a function to every element of a collection and returns a new collection of the results."
    },
    {
      "type": "mc",
      "title": "map vs flatMap",
      "context": "def ulcase(s: String) = Vector(s.toUpperCase, s.toLowerCase)\nnames.map(ulcase)\nnames.flatMap(ulcase)",
      "question": "What is flatMap() used for, in contrast to map()? (Multiple answers possible)",
      "options": [
        {
          "text": "To concatenate (flatten) the results when the function itself returns a collection",
          "isCorrect": true
        },
        {
          "text": "For functions that return an Option, the result contains all values v for which Some(v) comes back",
          "isCorrect": true
        },
        {
          "text": "To sort the collection by a predicate",
          "isCorrect": false
        },
        {
          "text": "To keep a nested collection of collections instead of flattening it",
          "isCorrect": false
        }
      ],
      "explanation": "flatMap() concatenates (flattens) the results when the function itself returns a collection. For functions that return an Option, the result contains all values v for which the function returns Some(v)."
    },
    {
      "type": "mc",
      "title": "Anonymous Functions",
      "context": "val triple = (x: Int) => 3*x",
      "question": "Which statements about anonymous functions (arrow syntax) in Scala are correct according to the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "They are written using the arrow syntax (x: Int) => 3*x",
          "isCorrect": true
        },
        {
          "text": "They can be passed as an argument",
          "isCorrect": true
        },
        {
          "text": "The parentheses around the parameter can be omitted if there is only one parameter",
          "isCorrect": true
        },
        {
          "text": "They must necessarily be assigned a name with val",
          "isCorrect": false
        }
      ],
      "explanation": "Anonymous functions are written using the arrow syntax and can be passed as an argument. The parentheses around the parameter can be omitted if the function has only one parameter."
    },
    {
      "type": "mc",
      "title": "Function as Return Value",
      "context": "def multiplyBy(factor: Double) = (x: Double) => factor*x\nval quintuple = multiplyBy(5)\nquintuple(100)",
      "question": "What value does quintuple(100) return in the following example?",
      "options": [
        {
          "text": "500",
          "isCorrect": true
        },
        {
          "text": "105",
          "isCorrect": false
        },
        {
          "text": "5",
          "isCorrect": false
        },
        {
          "text": "A function of type Double => Double",
          "isCorrect": false
        }
      ],
      "explanation": "multiplyBy(5) returns a function that multiplies its argument by 5. So quintuple(100) yields 500."
    },
    {
      "type": "mc",
      "title": "Future Properties",
      "context": null,
      "question": "Which statements about the Future type apply according to the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "It is a read-only placeholder object for a value that may not yet exist",
          "isCorrect": true
        },
        {
          "text": "By default it is executed asynchronously (non-blocking)",
          "isCorrect": true
        },
        {
          "text": "The value can be assigned only once, after which it is immutable",
          "isCorrect": true
        },
        {
          "text": "Its value can be overwritten any number of times",
          "isCorrect": false
        }
      ],
      "explanation": "A Future is a read-only placeholder object for a value that may not yet exist. By default it works asynchronously (non-blocking); the value can be assigned only once and is then immutable."
    },
    {
      "type": "categorize",
      "title": "Option vs Try",
      "context": null,
      "question": "Assign the constructs to the types Option and Try.",
      "items": [
        {
          "text": "Some(value)",
          "category": "Option"
        },
        {
          "text": "None",
          "category": "Option"
        },
        {
          "text": "getOrElse",
          "category": "Option"
        },
        {
          "text": "Success(value)",
          "category": "Try"
        },
        {
          "text": "Failure(exception)",
          "category": "Try"
        },
        {
          "text": "recover",
          "category": "Try"
        }
      ],
      "categories": [
        "Option",
        "Try"
      ],
      "explanation": "For the Option type, Some(value) stands for a present value and None for no value. For the Try type, Success(value) wraps a successful result and Failure(exception) a failed operation; recover handles exceptions."
    },
    {
      "type": "categorize",
      "title": "Call by Value/Name",
      "context": "def callByValue(x: Int) = { println(x); println(x) }\ndef callByName(x: => Int) = { println(x); println(x) }",
      "question": "Assign the evaluation properties to Call by Value and Call by Name respectively.",
      "items": [
        {
          "text": "Expression is evaluated once before the function is called",
          "category": "Call by Value"
        },
        {
          "text": "Syntax with => before the parameter type",
          "category": "Call by Name"
        },
        {
          "text": "Expression is re-evaluated each time it is accessed",
          "category": "Call by Name"
        },
        {
          "text": "def callByValue(x: Int)",
          "category": "Call by Value"
        },
        {
          "text": "def callByName(x: => Int)",
          "category": "Call by Name"
        }
      ],
      "categories": [
        "Call by Value",
        "Call by Name"
      ],
      "explanation": "With call by value, the parameter expression is evaluated once before the function is called. With call by name (syntax => before the parameter type), the expression is re-evaluated each time it is accessed within the function."
    },
    {
      "type": "order",
      "title": "for to map/flatMap",
      "context": "Scala transforms for-comprehensions into operations using foreach, map, and flatMap.",
      "question": "Order the transformations that Scala for-comprehensions are internally translated into, from the simplest to the most complex case.",
      "items": [
        "for( x <- c ) { … }  ->  c.foreach(x => { … })",
        "for( x <- c ) yield { ... }  ->  c.map({...})",
        "for( x <- c1; y <- c2; z <- c3) { … }  ->  c1.foreach(x => c2.foreach(y => c3.foreach(z => {...})))",
        "for( x <- c1; y <- c2; z <- c3) yield { … }  ->  c1.flatMap(x => c2.flatMap(y => c3.map(z => {...})))"
      ],
      "explanation": "A for without yield becomes foreach; a for with yield over a collection becomes map; multiple generators without yield become nested foreach; multiple generators with yield become flatMap/map."
    },
    {
      "type": "fill-blank",
      "title": "Anonymous Function",
      "context": null,
      "question": "Complete the anonymous function (arrow syntax) that triples an Int.",
      "template": "val triple = (x: {{0}}) {{1}} 3*x",
      "blanks": [
        {
          "accept": [
            "Int"
          ]
        },
        {
          "accept": [
            "=>"
          ]
        }
      ],
      "explanation": "Anonymous functions are written as (parameter: type) => expression. Here x of type Int is multiplied by 3."
    },
    {
      "type": "fill-blank",
      "title": "Function Type as Parameter",
      "context": "operateOnQuarter(math.ceil) // 1.0",
      "question": "Complete the definition that expects a function of type Double => Double as a parameter and applies it to 0.25.",
      "template": "def operateOnQuarter(f: Double {{0}} Double) = f({{1}})",
      "blanks": [
        {
          "accept": [
            "=>"
          ]
        },
        {
          "accept": [
            "0.25",
            ".25"
          ]
        }
      ],
      "explanation": "The function-type syntax is (parameter type) => result type; with just one parameter the parentheses are optional. Here f is applied to 0.25."
    },
    {
      "type": "fill-blank",
      "title": "Currying Shorthand",
      "context": "def multiply(x: Int, y: Int) = x * y\nmultiply2(3)(4) // = 12",
      "question": "Complete the curried version of multiply using Scala's shorthand (multiple parameter lists).",
      "template": "def multiply2(x: Int){{0}}y: Int{{1}} = x * y",
      "blanks": [
        {
          "accept": [
            "("
          ]
        },
        {
          "accept": [
            ")"
          ]
        }
      ],
      "explanation": "Scala's shorthand for currying uses multiple parameter lists, each in its own parentheses: def multiply2(x: Int)(y: Int) = x * y."
    },
    {
      "type": "code-find-bug",
      "title": "Creating a Future",
      "context": null,
      "question": "This code is supposed to create a Future asynchronously. Click the faulty line.",
      "language": "scala",
      "codeLines": [
        "import scala.concurrent._",
        "import ExecutionContext.Implicits.local",
        "val session = socialNetwork.createSessionFor(\"user\", credentials)",
        "val f: Future[List[Friend]] = Future { session.getFriends() }"
      ],
      "buggyLines": [
        1
      ],
      "fix": "The import must read 'import ExecutionContext.Implicits.global', not '.local'.",
      "explanation": "For Futures, the global ExecutionContext must be imported. According to the slide, the import is 'import ExecutionContext.Implicits.global', not '.local'."
    },
    {
      "type": "code-find-bug",
      "title": "Future onComplete",
      "context": null,
      "question": "When handling the Future result with onComplete, one line is wrong. Click it.",
      "language": "scala",
      "codeLines": [
        "f.onComplete {",
        "  case Success(friendList) => println(friendList)",
        "  case Error(exception)    => println(exception)",
        "}"
      ],
      "buggyLines": [
        2
      ],
      "fix": "The failure case must read 'case Failure(exception)', since onComplete matches a Try[].",
      "explanation": "The match parameter of onComplete is of type Try[]. The cases are therefore Success(...) and Failure(...). Instead of 'case Error(exception)' it must read 'case Failure(exception)'."
    },
    {
      "type": "code-find-bug",
      "title": "Option Pattern Match",
      "context": "m is a Map. m.get(key) returns Some(value) or None.",
      "question": "This pattern match on an Option is supposed to react when a key is missing. Click the faulty line.",
      "language": "scala",
      "codeLines": [
        "m.get(\"key\") match {",
        "  case Some(value) => println(value)",
        "  case Nothing => println(\"not found\")",
        "}"
      ],
      "buggyLines": [
        2
      ],
      "fix": "The empty case must read 'case None => ...', since None represents the absence of a value.",
      "explanation": "The 'no value' case of the Option type is None (a case object), not Nothing. The correct form is 'case None => ...'."
    },
    {
      "type": "open",
      "title": "No Value (Option)",
      "context": null,
      "question": "What is the name of the Option type's case object that expresses 'no value present'? (exact spelling)",
      "accept": [
        "None"
      ],
      "sampleAnswer": "None",
      "explanation": "None is the Option type's case object that represents the absence of a value; Some(value), by contrast, wraps an existing value."
    },
    {
      "type": "open",
      "title": "Multiple Parameter Lists",
      "context": null,
      "question": "What is the name of the functional programming technique in which a function with multiple arguments is turned into a chain of functions each taking a single argument (multiple parameter lists)?",
      "accept": [
        "Currying",
        "Curry"
      ],
      "sampleAnswer": "Currying",
      "explanation": "Currying turns a function with two arguments into a function whose first argument returns a function taking the second argument."
    },
    {
      "type": "self-assess",
      "title": "Execution Context",
      "context": null,
      "question": "Explain what an Execution Context is and what advantage it offers over explicitly creating threads.",
      "answer": "An Execution Context is an object that is responsible for executing computations - in a new thread, a pooled thread, or the current thread. It is similar to java.util.concurrent.Executor, which executes submitted Runnable tasks, and is used instead of explicitly creating threads. The advantage: it decouples task submission from the mechanics of how each task will be run (details of thread use, scheduling, etc.). Instead of 'new Thread(new RunnableTask()).start()' you write 'executor.execute(new RunnableTask())'.",
      "explanation": "The Execution Context decouples task submission from the mechanics of execution, similar to java.util.concurrent.Executor."
    },
    {
      "type": "self-assess",
      "title": "Implicit Parameters",
      "context": null,
      "question": "Explain how implicit parameters (implicit) work in Scala and what the compiler looks for when the parameter is omitted.",
      "answer": "A function or method can have a (second) parameter list that is marked implicit. It can be called with an explicit object or omitted. If it is omitted, the compiler looks for implicit values, which must themselves be declared implicit. It searches among all val and def of the desired type in scope, as well as in the companion objects of the associated types - the desired type itself and, if that is a parameterized (generic) type, also its type parameters.",
      "explanation": "An implicit parameter list can be given explicitly or omitted; in the latter case the compiler looks for matching implicit values in scope and in companion objects."
    },
    {
      "type": "self-assess",
      "title": "Control Abstraction",
      "context": "def until(condition: => Boolean)(block: => Unit) {\n  if (!condition) {\n    block\n    until(condition)(block)\n  }\n}",
      "question": "Using the until function as an example, explain how call-by-name parameters make a custom control structure (control abstraction) possible.",
      "answer": "The until function uses two call-by-name parameters (condition and block, each with =>) together with currying (two parameter lists) and recursion. Because the parameters are call-by-name, condition and block are re-evaluated each time they are accessed, i.e. on every recursive call - just like the condition and body of a real loop. As long as the condition is false, the block is executed and until calls itself recursively. This lets until be used like a built-in control structure, e.g. 'until (x == 0) { x -= 1; println(x) }', where x == 0 is re-checked every time.",
      "explanation": "With call-by-name, condition and block are re-evaluated on every recursive call, which makes until behave like a built-in loop."
    },
    {
      "type": "mc",
      "title": "Alternative map Syntax",
      "context": "There are several alternative syntaxes for map().",
      "question": "Which of the following notations apply the same tripling to Array(1,2,3) according to the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "Array(1,2,3).map((x: Int) => 3*x)",
          "isCorrect": true
        },
        {
          "text": "Array(1,2,3).map { (x: Int) => 3*x }",
          "isCorrect": true
        },
        {
          "text": "Array(1,2,3) map { (x: Int) => 3*x }",
          "isCorrect": true
        },
        {
          "text": "Array(1,2,3).reduce((x: Int) => 3*x)",
          "isCorrect": false
        }
      ],
      "explanation": "Besides the standard notation with a dot and parentheses, map can also be written with curly braces {} instead of () and in infix notation (without the dot). reduce, on the other hand, is not a valid alternative."
    },
    {
      "type": "fill-blank",
      "title": "Underscore Placeholder",
      "context": "operateOnQuarter((x: Double) => 3*x) // 0.75\n// placeholder, if the parameter occurs only once on the right-hand side",
      "question": "Complete the call where, thanks to type inference and placeholder syntax, the parameter appears only once on the right-hand side (result 0.75).",
      "template": "operateOnQuarter( 3 * {{0}} )",
      "blanks": [
        {
          "accept": [
            "_"
          ]
        }
      ],
      "explanation": "If the parameter occurs only once on the right-hand side, it can be replaced by the placeholder _: operateOnQuarter(3 * _)."
    },
    {
      "type": "open",
      "title": "onComplete Parameter Type",
      "context": "f.onComplete {\n  case Success(friendList) => …\n  case Failure(exception)  => …\n}",
      "question": "According to the slide, what type is the match parameter of the Future callback method onComplete? (exact spelling with brackets)",
      "accept": [
        "Try[]",
        "Try",
        "Try[ ]"
      ],
      "sampleAnswer": "Try[]",
      "explanation": "The slide notes that the match parameter of onComplete is of type Try[], which is why the cases Success(...) and Failure(...) are matched."
    },
    {
      "type": "mc",
      "title": "Future States",
      "context": null,
      "question": "Which two states can a Future be in according to the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "not completed (computation has not yet completed)",
          "isCorrect": true
        },
        {
          "text": "completed (computation has completed)",
          "isCorrect": true
        },
        {
          "text": "blocked (computation is waiting for a thread)",
          "isCorrect": false
        },
        {
          "text": "cancelled (computation was aborted)",
          "isCorrect": false
        }
      ],
      "explanation": "A Future has two states: 'not completed' (computation has not yet completed) and 'completed'. The completed state subdivides into successfully completed (with a value) and failed (exception)."
    },
    {
      "type": "mc",
      "title": "sbt Basics",
      "context": null,
      "question": "What is sbt and what is it used for?",
      "options": [
        {
          "text": "A build tool for Scala (and Java, etc.) that manages workflow tasks such as build and test",
          "isCorrect": true
        },
        {
          "text": "A relational database for Scala objects",
          "isCorrect": false
        },
        {
          "text": "A template engine for generating HTML",
          "isCorrect": false
        },
        {
          "text": "A web framework for asynchronous I/O",
          "isCorrect": false
        }
      ],
      "explanation": "sbt is the build tool for Scala (and Java, etc.), comparable to Maven, and it manages project workflow tasks such as build and test."
    },
    {
      "type": "open",
      "title": "Build Definition File",
      "context": null,
      "question": "What is the name of the central configuration (aka definition) file of an sbt project?",
      "accept": [
        "build.sbt"
      ],
      "sampleAnswer": "build.sbt",
      "explanation": "The build configuration of an sbt project is held in the build.sbt file."
    },
    {
      "type": "categorize",
      "title": "sbt Directory Structure",
      "context": "Standard directory structure of an sbt project (myproject/).",
      "question": "Assign the paths to the correct branch of the sbt directory structure.",
      "items": [
        {
          "text": "src/main/scala",
          "category": "Source code (main)"
        },
        {
          "text": "src/main/resources",
          "category": "Source code (main)"
        },
        {
          "text": "src/test/scala",
          "category": "Tests (test)"
        },
        {
          "text": "src/test/resources",
          "category": "Tests (test)"
        },
        {
          "text": "target/",
          "category": "Build output"
        }
      ],
      "categories": [
        "Source code (main)",
        "Tests (test)",
        "Build output"
      ],
      "explanation": "src/main contains the production code (scala, resources), src/test the tests, and target/ the build output."
    },
    {
      "type": "fill-blank",
      "title": "build.sbt DSL",
      "context": "build.sbt uses Scala and a DSL of the form Key := Value.",
      "question": "Complete the two build definition lines in build.sbt (Key := Value DSL).",
      "template": "name {{0}} \"My Project\"\nversion := {{1}}",
      "blanks": [
        {
          "accept": [
            ":="
          ]
        },
        {
          "accept": [
            "\"0.1\"",
            "0.1"
          ]
        }
      ],
      "explanation": "In the build.sbt DSL, values are assigned with :=, e.g. name := \"My Project\" and version := \"0.1\"."
    },
    {
      "type": "fill-blank",
      "title": "Dependency Syntax",
      "context": "Dependencies from the Maven Repo are specified as group-id % artifact-id % version; ++= adds a Seq.",
      "question": "Fill in the missing operators to add the dependency correctly to libraryDependencies.",
      "template": "libraryDependencies {{0}} Seq(\n  \"org.scalatest\" {{1}} \"scalatest\" % \"3.1.0\"\n)",
      "blanks": [
        {
          "accept": [
            "++="
          ]
        },
        {
          "accept": [
            "%"
          ]
        }
      ],
      "explanation": "libraryDependencies is extended by a Seq using ++=; group-id, artifact-id and version are separated with %."
    },
    {
      "type": "mc",
      "title": "%% vs %",
      "context": "\"com.typesafe.akka\" %% \"akka-actor-typed\" % \"2.6.14\"",
      "question": "What does the %% operator do (as opposed to %) when adding a dependency?",
      "options": [
        {
          "text": "It automatically appends the binary Scala version to the artifact-id",
          "isCorrect": true
        },
        {
          "text": "It loads the dependency from two repositories simultaneously",
          "isCorrect": false
        },
        {
          "text": "It marks the dependency as test-only",
          "isCorrect": false
        },
        {
          "text": "It doubles the version number",
          "isCorrect": false
        }
      ],
      "explanation": "%% is a shortcut that automatically appends the binary Scala version to the artifact-id."
    },
    {
      "type": "mc",
      "title": "Templates & Plugins",
      "context": null,
      "question": "Which statements about sbt templates, plugins and repositories are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "Templates create an initial project structure and are run with 'sbt new <template>'",
          "isCorrect": true
        },
        {
          "text": "Plugins extend the build definition and are added with addSbtPlugin",
          "isCorrect": true
        },
        {
          "text": "The Maven Cloud Repository is known by default",
          "isCorrect": true
        },
        {
          "text": "Additional repositories are added via 'sbt new'",
          "isCorrect": false
        },
        {
          "text": "Templates cannot create a directory structure",
          "isCorrect": false
        }
      ],
      "explanation": "Templates create the initial project structure via 'sbt new <template>'; plugins extend the build definition and are added to build.sbt with addSbtPlugin; the Maven Cloud Repository is known by default."
    },
    {
      "type": "fill-blank",
      "title": "Custom Repository",
      "context": "The Maven Cloud Repository is known by default; further repos are added this way.",
      "question": "Fill in the keyword used to add additional repositories in build.sbt.",
      "template": "{{0}} += \"my repo\" at \"https://myrepo.example.com/snapshots\"",
      "blanks": [
        {
          "accept": [
            "resolvers"
          ]
        }
      ],
      "explanation": "Additional repositories are added via resolvers += \"name\" at \"url\"."
    },
    {
      "type": "self-assess",
      "title": "Play Characteristics",
      "context": null,
      "question": "Name the three major differences of Play compared to other Java web frameworks and briefly explain what 'stateless (RESTful)' means.",
      "answer": "The three major differences are: (1) stateless (RESTful), (2) static controller methods (default) and (3) asynchronous I/O. Stateless (RESTful) means that the server does not hold any session state between requests; each request is self-contained, which improves scalability. Play is also built on Pekko (since 3.0) / Akka (before) and emphasizes an actor-based concurrency model.",
      "explanation": "The slide names the three major differences explicitly; stateless means that no server-side session state is held."
    },
    {
      "type": "self-assess",
      "title": "Shared Mutable State",
      "context": null,
      "question": "Explain the problem of 'shared mutable state' in concurrent programming and why locks are, according to the slide, not an ideal solution.",
      "answer": "Shared mutable state means that stateful objects can be changed by concurrent application parts at the same time. To prevent simultaneous mutations, read and write locks are used. However, locks slow down the application, are hard to reason about, and can lead to nasty, hard to detect bugs such as deadlocks.",
      "explanation": "The 'Concurrent Programming' slide describes shared mutable state as the core problem and names the drawbacks of locks."
    },
    {
      "type": "mc",
      "title": "Actor Model",
      "context": null,
      "question": "Which statements about the Actor Model or actors are correct according to the slides? (Multiple answers possible)",
      "options": [
        {
          "text": "Actors communicate exclusively by exchanging messages asynchronously (non-blocking)",
          "isCorrect": true
        },
        {
          "text": "An actor encapsulates state and behavior and is typically responsible for only a small task",
          "isCorrect": true
        },
        {
          "text": "Actors form a hierarchy in which each actor has exactly one supervisor (the one that created it)",
          "isCorrect": true
        },
        {
          "text": "Actors communicate synchronously through shared memory",
          "isCorrect": false
        },
        {
          "text": "Behavior methods return values rather than only side-effects",
          "isCorrect": false
        }
      ],
      "explanation": "Actors communicate exclusively by exchanging messages asynchronously (non-blocking), encapsulate state and behavior, form a hierarchy, and each has one supervisor."
    },
    {
      "type": "categorize",
      "title": "Actor Components",
      "context": "An actor contains several components (Actor Basics).",
      "question": "Assign the descriptions to the components of an actor.",
      "items": [
        {
          "text": "Messages are enqueued in time-order (FIFO)",
          "category": "Mailbox"
        },
        {
          "text": "current behavior must handle the next dequeued message",
          "category": "Mailbox"
        },
        {
          "text": "resume, restart, stop, fail",
          "category": "Supervisor Strategy"
        },
        {
          "text": "how to handle faults on children",
          "category": "Supervisor Strategy"
        },
        {
          "text": "internal variables / properties, optionally persistable",
          "category": "State"
        }
      ],
      "categories": [
        "Mailbox",
        "Supervisor Strategy",
        "State"
      ],
      "explanation": "The mailbox enqueues messages in FIFO order, the supervisor strategy determines how to react to faults on children, and state is the internal variables."
    },
    {
      "type": "order",
      "title": "Reactive Manifesto",
      "context": "The Reactive Manifesto names four characteristics of reactive applications.",
      "question": "Put the four characteristics of reactive applications in the order shown on the slide (top to bottom).",
      "items": [
        "message-driven (react to messages)",
        "elastic (react to load)",
        "resilient (react to failure)",
        "responsive (react to users)"
      ],
      "explanation": "The slide lists the four characteristics in this order: message-driven, elastic, resilient, responsive."
    },
    {
      "type": "mc",
      "title": "Play Project Structure",
      "context": "Project structure of a newly created Play project.",
      "question": "Where is the routes file located in a Play project?",
      "options": [
        {
          "text": "in the conf directory",
          "isCorrect": true
        },
        {
          "text": "in the app/controllers directory",
          "isCorrect": false
        },
        {
          "text": "in the public directory",
          "isCorrect": false
        },
        {
          "text": "in the target directory",
          "isCorrect": false
        }
      ],
      "explanation": "The routes file is located in the conf directory (alongside application.conf, logback.xml and messages)."
    },
    {
      "type": "categorize",
      "title": "Play Folders",
      "context": "Project structure of a Play project.",
      "question": "Assign the files/folders to the correct top-level directory of a Play project.",
      "items": [
        {
          "text": "controllers/",
          "category": "app"
        },
        {
          "text": "views/",
          "category": "app"
        },
        {
          "text": "application.conf",
          "category": "conf"
        },
        {
          "text": "routes",
          "category": "conf"
        },
        {
          "text": "images/, javascripts/, stylesheets/",
          "category": "public"
        }
      ],
      "categories": [
        "app",
        "conf",
        "public"
      ],
      "explanation": "controllers/ and views/ are under app, application.conf and routes under conf, and the static assets under public."
    },
    {
      "type": "mc",
      "title": "Dependency Injection",
      "context": null,
      "question": "Which statements about dependency injection with Guice in Play are correct? (Multiple answers possible)",
      "options": [
        {
          "text": "Components declare their dependencies with @Inject",
          "isCorrect": true
        },
        {
          "text": "By default a new instance is created every time it is needed; @Singleton forces a single instance",
          "isCorrect": true
        },
        {
          "text": "Instances are created lazily by default (only when used)",
          "isCorrect": true
        },
        {
          "text": "On shutdown all instances are cleaned up automatically",
          "isCorrect": false
        },
        {
          "text": "@Inject may only be used on fields, not on constructors",
          "isCorrect": false
        }
      ],
      "explanation": "Components declare their dependencies with @Inject; by default a new instance is created lazily whenever it is needed, and @Singleton forces a single instance."
    },
    {
      "type": "code-find-bug",
      "title": "Routes Syntax",
      "context": "A line in conf/routes: method, URI pattern, Action generator.",
      "question": "In this route line (conf/routes), the parameter declaration in the Action generator is faulty. Click the faulty line.",
      "language": "scala",
      "codeLines": [
        "# method   URI-pattern        Action-generator",
        "GET        /clients/:id       controllers.Clients.show(id Long)"
      ],
      "buggyLines": [
        1
      ],
      "fix": "The parameter type must be declared with a colon: controllers.Clients.show(id: Long).",
      "explanation": "Parameter types in the routes file are declared with a colon, e.g. controllers.Clients.show(id: Long)."
    },
    {
      "type": "fill-blank",
      "title": "Twirl Naming",
      "context": "Twirl naming convention: views/Application/index.scala.html -> ?",
      "question": "Complete the class/call name generated according to the Twirl naming convention for the template views/Application/index.scala.html.",
      "template": "views.{{0}}.Application.index",
      "blanks": [
        {
          "accept": [
            "html"
          ]
        }
      ],
      "explanation": "Twirl compiles views/Application/index.scala.html into the class views.html.Application.index with an apply() method."
    },
    {
      "type": "mc",
      "title": "Twirl @ Character",
      "context": null,
      "question": "What does the '@' character stand for in a Twirl template?",
      "options": [
        {
          "text": "It is the single escape character and denotes the beginning of a dynamic statement",
          "isCorrect": true
        },
        {
          "text": "It marks a comment",
          "isCorrect": false
        },
        {
          "text": "It declares a template annotation",
          "isCorrect": false
        },
        {
          "text": "It always introduces a multi-line block",
          "isCorrect": false
        }
      ],
      "explanation": "The '@' is the single escape character and denotes the beginning of a dynamic statement; its end is detected automatically."
    },
    {
      "type": "fill-blank",
      "title": "Twirl Block",
      "context": "Twirl: for multi-token statements brackets are used, for multi-statement blocks ...",
      "question": "Complete the brackets: For a multi-statement block in Twirl (several statements), ... are used.",
      "template": "@{{0}} val x = customer.salary - bonus; x {{1}}",
      "blanks": [
        {
          "accept": [
            "{"
          ]
        },
        {
          "accept": [
            "}"
          ]
        }
      ],
      "explanation": "Multi-statement blocks are wrapped in curly brackets: @{ val x = ...; x }."
    },
    {
      "type": "order",
      "title": "Defining a Form",
      "context": "Procedure for defining a form, including binding the request data.",
      "question": "Put the steps for defining a Play form (Forms: Definition) into the correct order.",
      "items": [
        "Define a case class with the properties of the form",
        "Create a companion object with the Form structure",
        "Define the mapping with field names and constraints",
        "Provide apply & unapply functions",
        "Bind the data from the request with bindFromRequest"
      ],
      "explanation": "First the case class, then the companion object with the Form, inside it mapping(...) as well as apply/unapply, and finally bindFromRequest to bind the data."
    },
    {
      "type": "fill-blank",
      "title": "Number Constraint",
      "context": "Forms: Constraints - mapping with nonEmptyText and a number range.",
      "question": "Complete the constraint that limits the 'age' field to values between 0 and 110.",
      "template": "mapping(\"name\" -> nonEmptyText,\n  \"age\" -> {{0}}(min=0, max=110))",
      "blanks": [
        {
          "accept": [
            "number"
          ]
        }
      ],
      "explanation": "The constraint number(min=0, max=110) limits the number field to the range 0 to 110."
    },
    {
      "type": "self-assess",
      "title": "fold in Forms",
      "context": "userForm.bindFromRequest.fold( ... )",
      "question": "Explain the function fold(errorFunction, successFunction) in form validation and which action is typical in each of the two cases.",
      "answer": "fold(errorFunction, successFunction) evaluates the form bound from bindFromRequest. If the binding/validation fails (formWithErrors), the errorFunction is called - typically the template is re-rendered with the errors and returned as a BadRequest. On successful binding (userData), the successFunction is called, which processes the data and typically responds with a Redirect ('Redirect after POST' pattern).",
      "explanation": "fold separates the error case from the success case of the bound form; typically a BadRequest is returned on errors and a Redirect (Redirect after POST) on success."
    },
    {
      "type": "code-find-bug",
      "title": "Async Controller",
      "context": "A lengthy/async operation (e.g. a DB query) should not block.",
      "question": "This asynchronous controller contains an error in the builder method used. Click the faulty line.",
      "language": "scala",
      "codeLines": [
        "def index = Action {",
        "  val futureInt = Future { intensiveComputation() }",
        "  futureInt.map(i => Ok(\"Got result: \" + i))",
        "}"
      ],
      "buggyLines": [
        0
      ],
      "fix": "For asynchronous actions Action.async must be used instead of Action: def index = Action.async {",
      "explanation": "For actions that return a Future[Result], the builder must use Action.async instead of Action."
    },
    {
      "type": "mc",
      "title": "Action.async",
      "context": null,
      "question": "What signature does Action.async have compared to Action?",
      "options": [
        {
          "text": "Action.async: Request => Future[Result]",
          "isCorrect": true
        },
        {
          "text": "Action.async: Future[Request] => Result",
          "isCorrect": false
        },
        {
          "text": "Action.async: Result => Future[Request]",
          "isCorrect": false
        },
        {
          "text": "Action.async: Request => Result",
          "isCorrect": false
        }
      ],
      "explanation": "Action is Request => Result, Action.async is Request => Future[Result]; the server does not block and sends the response 'as soon as possible'."
    },
    {
      "type": "open",
      "title": "JSON Package",
      "context": "e.g. JsValue, JsString, JsNumber, JsObject, JsArray, JsNull.",
      "question": "What is the name of the Play package that provides the data structures for representing JSON data?",
      "accept": [
        "play.api.libs.json"
      ],
      "sampleAnswer": "play.api.libs.json",
      "explanation": "The JSON data structures live in the package play.api.libs.json."
    },
    {
      "type": "categorize",
      "title": "MongoDB Modelling",
      "context": "MongoDB Data Modelling - Modelling Rules.",
      "question": "Match the MongoDB modelling recommendations to the respective modelling technique.",
      "items": [
        {
          "text": "Group structure, e.g. phone: { office, mobile, home }",
          "category": "Subdocuments"
        },
        {
          "text": "Group varying properties as 'details'",
          "category": "Subdocuments"
        },
        {
          "text": "Separate distinct documents that are not always used together",
          "category": "References"
        },
        {
          "text": "Convention key=<collection_name>_id, value=_id of the referenced document",
          "category": "References"
        }
      ],
      "categories": [
        "Subdocuments",
        "References"
      ],
      "explanation": "Subdocuments serve to structure/group within a document; references separate distinct documents that are not always used together."
    },
    {
      "type": "mc",
      "title": "MongoDB _id",
      "context": null,
      "question": "What does the slide recommend regarding the special key _id in MongoDB?",
      "options": [
        {
          "text": "Let the key _id be autofilled automatically as an ObjectId on insert",
          "isCorrect": true
        },
        {
          "text": "Assign _id manually as a sequential integer",
          "isCorrect": false
        },
        {
          "text": "Never use _id as an index",
          "isCorrect": false
        },
        {
          "text": "_id is not allowed in MongoDB",
          "isCorrect": false
        }
      ],
      "explanation": "The special key _id should be autofilled automatically (as an ObjectId) on document insert."
    },
    {
      "type": "order",
      "title": "Play & ReactiveMongo",
      "context": "reactiveMongo implements async MongoDB operations.",
      "question": "Put the steps for connecting ReactiveMongo to a Play project into the correct order.",
      "items": [
        "Add the dependency to build.sbt",
        "Configure the DB connection in conf/application.conf",
        "Inject ReactiveMongoApi",
        "Add the traits MongoController and ReactiveMongoComponents"
      ],
      "explanation": "First add the dependency in build.sbt, then configure the connection in application.conf, then inject ReactiveMongoApi, and finally add the traits MongoController / ReactiveMongoComponents."
    },
    {
      "type": "self-assess",
      "title": "Async Blocking",
      "context": null,
      "question": "Explain why, with Action.async, the server is not blocked while the web client waiting for the response very much is 'blocked'.",
      "answer": "With Action.async, the lengthy/async operation (e.g. a DB query or remote API request) is executed non-blockingly; the framework sends the response 'as soon as possible'. The web client does wait for the response and is in that sense blocked (it only receives an answer later), but the server thread is not blocked and can serve other clients in the meantime. As a result, the server remains highly scalable with minimal resource consumption.",
      "explanation": "The slide 'Play: Async Controllers' explicitly distinguishes between the blocked web client and the non-blocked server."
    }
  ]
};
