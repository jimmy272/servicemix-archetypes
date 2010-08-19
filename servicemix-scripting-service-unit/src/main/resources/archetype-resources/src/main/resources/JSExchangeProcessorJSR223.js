/*
 * Generated by Apache ServiceMix Archetype
 */
importPackage(java.lang); 
importPackage(javax.jbi.messaging);
importPackage(org.apache.servicemix.jbi.jaxp);

System.out.println("Starting JSR-223 JavaScript processor");

System.out.println(exchange);       
inputMessage = new SourceTransformer().toString(inMessage.getContent());
System.out.println("Hello, I got an input message " + inputMessage);
out = exchange.createMessage();
out.setContent(new StringSource("<response>" + bindings.get("answerJS") + "</response>"));
exchange.setMessage(out, "out");
System.out.println(exchange);

System.out.println("Stopping JSR-223 JavaScript processor");
